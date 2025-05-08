import { FC, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AppDispatch } from "../redux/store";
import { addPet } from "../redux/auth/operations";
import { Link } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { SvgIcon, SvgIconProps } from "@mui/material";
import MenuDropdown from "./MenuDropdown";
import { types } from "../data/types";
import Icon from "./ComponentsForDesign/Icon";
import { useTheme } from "../utils/useTheme";

interface IFormPetProfile {
  petData: {
    sex: string | null;
    imgURL: File | null | undefined;
  };
  resetPetData: () => void;
  setErrorMessage: (value: string) => void;
}

interface IFormInputs {
  title: string;
  name: string;
  birthday: string;
  species: string;
}

const FormPetProfile: FC<IFormPetProfile> = ({
  petData,
  resetPetData,
  setErrorMessage,
}) => {
  const [selectedType, setSelectedType] = useState("");
  const [isMenuTypes, setMenuTypes] = useState(false);

  const itemTypeRef = useRef(null);

  const { theme } = useTheme();

  const dispatch = useDispatch<AppDispatch>();

  const schema = yup
    .object({
      title: yup.string().default(""),
      name: yup.string().default(""),
      birthday: yup.string().default(""),
      species: yup.string().default(""),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleSelectMenu = (selected: string) => {
    setSelectedType(selected);
    setValue("species", selected);
    setMenuTypes(false);
  };

  const onSubmit = async (data: IFormInputs) => {
    if (!petData.sex) {
      setErrorMessage("Please select your pet's gender");
      return;
    }

    const formattedDate = dayjs(data.birthday).format("DD.MM.YYYY");

    const newPet = {
      title: data.title,
      name: data.name,
      birthday: formattedDate,
      species: data.species,
      sex: petData.sex,
      imgURL: petData.imgURL,
    };

    try {
      await dispatch(addPet(newPet));

      if (Object.keys(errors).length !== 0) {
        return toast.error("Something went wrong...");
      }

      toast.success("Your data is successfully updated");
      reset();
      resetPetData();
      setSelectedType("");
    } catch {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap-input">
        <div>
          <input
            {...register("title")}
            className={`input ${theme === "light" ? "" : "dark"}`}
            placeholder="Title"
          />
          <p className="form-errors">{errors.title?.message}</p>
        </div>

        <div>
          <input
            {...register("name")}
            className={`input ${theme === "light" ? "" : "dark"}`}
            placeholder="Pet's Name"
          />
          <p className="form-errors">{errors.name?.message}</p>
        </div>

        <div className="add-mypet-input-wrap">
          <div>
            <Controller
              name="birthday"
              control={control}
              rules={{ required: "Birthday is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) => field.onChange(date)}
                  format="DD.MM.YYYY"
                  slots={{
                    openPickerIcon: CustomCalendarIcon,
                  }}
                  slotProps={{
                    textField: {
                      sx: {
                        "& .MuiOutlinedInput-root": {
                          width: {
                            xs: "240px",
                            sm: "295px",
                            md: "223px",
                            lg: "184px",
                          },
                          "& fieldset": {
                            borderColor: "#26262626",
                            borderRadius: "30px",

                            width: {
                              xs: "240px",
                              sm: "295px",
                              md: "223px",
                              lg: "184px",
                            },
                          },
                          "& input": {
                            padding: { xs: "9.5px", md: "14.5px" },
                            width: { xs: "177px", sm: "261px", md: "140px" },
                          },
                          "& button": {},
                          "&:hover svg": {
                            color: "#f6b83d",
                          },
                          "&:hover fieldset": {
                            border: "1px solid #f6b83d",
                          },
                          "&.Mui-focused fieldset": {
                            border: "1px solid #f6b83d",
                          },
                        },
                      },
                    },
                  }}
                />
              )}
            />
            {errors.birthday && (
              <p className="form-errors">{errors.birthday.message}</p>
            )}
          </div>

          <div className={`find-form-wrap type`}>
            <Controller
              name="species"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`input ${
                    theme === "light" ? "find-input" : "dark find-input"
                  }`}
                  placeholder="Type of pet"
                  value={selectedType}
                />
              )}
            />
            <button
              type="button"
              className="find-form-button"
              onClick={() => setMenuTypes(!isMenuTypes)}
              ref={itemTypeRef}
            >
              <div className="find-form-icon">
                <Icon name="chevron-down" className="icon-search" />
              </div>
            </button>

            <p className="form-errors">{errors.species?.message}</p>
            {isMenuTypes && (
              <MenuDropdown
                onSelect={handleSelectMenu}
                onClose={() => setMenuTypes(false)}
                ref={itemTypeRef}
                data={types}
              />
            )}
          </div>
        </div>
      </div>

      <div className="my-pet-button-wrapper">
        <Link to="/profile" className="form-button back">
          Back
        </Link>
        <button type="submit" className="form-button submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormPetProfile;

function CustomCalendarIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} sx={{ fontSize: { xs: 18, md: 20 } }}>
      <path d="M7 2v1h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-6v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20 9h-16v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h6v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM4 11h16v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707z"></path>
    </SvgIcon>
  );
}
