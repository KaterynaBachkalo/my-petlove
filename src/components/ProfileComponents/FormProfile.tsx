import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { toast } from "react-toastify";
import { IFormInputs, IUser } from "../../types";
import { editUserThunk } from "../../redux/auth/operations";
import { useTheme } from "../../utils/useTheme";

interface IFormProfile {
  onClose: () => void;
  userData: IUser;
}

const FormProfile: FC<IFormProfile> = ({ onClose, userData }) => {
  const dispatch = useDispatch<AppDispatch>();

  const schema = yup
    .object({
      name: yup.string(),
      email: yup.string().email(),
      phone: yup
        .string()
        .matches(/^\d+$/, "The phone must contain only numbers.")
        .length(9, "The phone must contain exactly 9 digits"),
    })
    .required();

  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: userData.name || "User name",
      email: userData.email || "",
      phone: userData.phone?.toString() || "",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    setValue("name", userData.name || "User name");
    setValue("phone", userData.phone?.toString() || "");
  }, [userData, setValue]);

  const onSubmit = async (data: IFormInputs) => {
    const updateData = {
      name: data.name,
      phone: data.phone,
    };
    try {
      await dispatch(editUserThunk(updateData));
      reset(updateData);
      onClose();

      toast.success("Your data is successfully updated");
    } catch {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap-input">
        <div>
          <input
            {...register("name")}
            className={`input ${theme === "light" ? "" : "dark"} edit`}
            value={watch("name")}
            onChange={(e) => setValue("name", e.target.value)}
          />
          <p className="form-errors">{errors.name?.message}</p>
        </div>

        <div>
          <input
            {...register("email")}
            className={`input ${theme === "light" ? "" : "dark"} edit`}
            value={watch("email")}
            readOnly
          />
        </div>

        <div className="input-wrap-number">
          <input
            {...register("phone")}
            className={`input ${theme === "light" ? "" : "dark"} edit`}
            value={watch("phone")}
            onChange={(e) => setValue("phone", e.target.value)}
          />
          <p className="form-number-default">+380</p>
          <p className="form-errors">{errors.phone?.message}</p>
        </div>
      </div>

      <button type="submit" className="form-button">
        Go to profile
      </button>
    </form>
  );
};

export default FormProfile;
