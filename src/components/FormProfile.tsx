import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IFormInputs, IUser } from "../types";
import { editUserThunk } from "../redux/auth/operations";

interface IFormProfile {
  onClose: () => void;
  userData: IUser;
}

const FormProfile: FC<IFormProfile> = ({ onClose, userData }) => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string(),
      email: yup.string().email().required("Email is required"),
      phone: yup.number(),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: userData.name || "",
      email: userData.email || "",
      phone: userData.phone || 0,
    },
  });

  useEffect(() => {
    setValue("name", userData.name || "");
    setValue("email", userData.email || "");
    setValue("phone", userData.phone || 0);
  }, [userData, setValue]);

  const onSubmit = async (data: IFormInputs) => {
    try {
      await dispatch(editUserThunk(data));
      navigate("/profile");
      onClose();

      if (errors) {
        return toast.error("Something went wrong...");
      }
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
            className="input"
            value={watch("name")}
            onChange={(e) => setValue("name", e.target.value)}
          />
          <p className="form-errors">{errors.name?.message}</p>
        </div>

        <div>
          <input
            {...register("email")}
            className="input"
            value={watch("email")}
            onChange={(e) => setValue("email", e.target.value)}
          />
          <p className="form-errors">{errors.email?.message}</p>
        </div>

        <div>
          <input
            {...register("phone")}
            className="input"
            value={watch("phone")}
            onChange={(e) => setValue("phone", Number(e.target.value))}
          />
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
