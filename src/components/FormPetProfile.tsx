import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AppDispatch } from "../redux/store";
import { addPet } from "../redux/auth/operations";
import { Link } from "react-router-dom";

interface IFormPetProfile {
  petData: {
    sex: string | null;
    imgURL: File | null | undefined;
  };
  resetPetData: () => void;
}

interface IFormInputs {
  title: string;
  name: string;
  birthday: string;
  species: string;
}

const FormPetProfile: FC<IFormPetProfile> = ({ petData, resetPetData }) => {
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
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    const newPet = {
      title: data.title,
      name: data.name,
      birthday: data.birthday,
      species: data.species,
      ...petData,
    };

    try {
      await dispatch(addPet(newPet));

      if (Object.keys(errors).length !== 0) {
        return toast.error("Something went wrong...");
      }

      toast.success("Your data is successfully updated");
      reset();
      resetPetData();
    } catch {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap-input">
        <div>
          <input {...register("title")} className="input" placeholder="Title" />
          <p className="form-errors">{errors.title?.message}</p>
        </div>

        <div>
          <input
            {...register("name")}
            className="input"
            placeholder="Pet's Name"
          />
          <p className="form-errors">{errors.name?.message}</p>
        </div>

        <div>
          <input
            {...register("birthday")}
            className="input"
            // onChange={(e) => setValue("date", e.target.value)}
          />
          <p className="form-errors">{errors.birthday?.message}</p>
        </div>

        <div>
          <input
            {...register("species")}
            className="input"
            // onChange={(e) => setValue("species", e.target.value)}
          />
          <p className="form-errors">{errors.species?.message}</p>
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
