import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { logInThunk } from "../redux/auth/operations";
import { AppDispatch } from "../redux/store";
import { IForms } from "../types";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    })
    .required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<IForms>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IForms) => {
    dispatch(logInThunk(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("email")} placeholder="Email address" />
        <p>{errors.email?.message}</p>

        <div>
          <input
            {...register("password")}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          {showPassword ? (
            <div onClick={() => setShowPassword(false)}>
              <Icon name="openeye" className="" />
            </div>
          ) : (
            <div onClick={() => setShowPassword(true)}>
              <Icon name="closeeye" className="" />
            </div>
          )}
        </div>
        <p>{errors.password?.message}</p>
      </div>

      <button type="submit">Log in</button>
    </form>
  );
};

export default FormLogin;
