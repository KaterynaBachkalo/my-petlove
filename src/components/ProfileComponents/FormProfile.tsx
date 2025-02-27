import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { toast } from "react-toastify";
import { IFormInputs, IUser } from "../../types";
import { editUserThunk } from "../../redux/auth/operations";

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
    setValue("phone", userData.phone || 0);
  }, [userData, setValue]);

  const onSubmit = async (data: IFormInputs) => {
    const updateData = {
      name: data.name,
      phone: data.phone,
    };
    try {
      await dispatch(editUserThunk(updateData));

      onClose();

      if (Object.keys(errors).length !== 0) {
        return toast.error("Something went wrong...");
      }

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
            className="input edit"
            value={watch("name")}
            onChange={(e) => setValue("name", e.target.value)}
          />
          <p className="form-errors">{errors.name?.message}</p>
        </div>

        <div>
          <input
            {...register("email")}
            className="input edit"
            value={watch("email")}
            readOnly
          />
        </div>

        <div>
          <input
            {...register("phone")}
            className="input edit"
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
