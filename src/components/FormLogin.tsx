import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { logInThunk, registerThunk } from "../redux/auth/operations";
import { AppDispatch } from "../redux/store";
import { IForms, IFormsBD } from "../types";
import { Link } from "react-router-dom";

interface IFormText {
  formText: string;
  link: string;
  textLink: string;
  buttonText: string;
  isInput: boolean;
}

const FormLogin: FC<IFormText> = ({
  formText,
  link,
  textLink,
  buttonText,
  isInput,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const schema = yup
    .object({
      name: yup.string(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), undefined], "Passwords must match"),
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
    if (buttonText === "Registration") {
      const dataBD: IFormsBD = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      dispatch(registerThunk(dataBD));
    } else {
      const dataBD: IFormsBD = {
        email: data.email,
        password: data.password,
      };
      dispatch(logInThunk(dataBD));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrap-input">
        {isInput && (
          <div>
            <input {...register("name")} placeholder="Name" className="input" />
            <p className="form-errors">{errors.name?.message}</p>
          </div>
        )}

        <div>
          <input {...register("email")} placeholder="Email" className="input" />
          <p className="form-errors">{errors.email?.message}</p>
        </div>

        <div className="password-wrap">
          <input
            {...register("password")}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="input"
          />
          {showPassword ? (
            <div onClick={() => setShowPassword(false)}>
              <Icon name="openeye" className="icon-eye" />
            </div>
          ) : (
            <div onClick={() => setShowPassword(true)}>
              <Icon name="closeeye" className="icon-eye" />
            </div>
          )}
          <p className="form-errors">{errors.password?.message}</p>
        </div>

        {isInput && (
          <div className="password-wrap">
            <input
              {...register("confirmPassword")}
              placeholder="Confirm password"
              type={showConfirmPassword ? "text" : "password"}
              className="input"
            />
            {showConfirmPassword ? (
              <div onClick={() => setShowConfirmPassword(false)}>
                <Icon name="openeye" className="icon-eye" />
              </div>
            ) : (
              <div onClick={() => setShowConfirmPassword(true)}>
                <Icon name="closeeye" className="icon-eye" />
              </div>
            )}
            <p className="form-errors">{errors.confirmPassword?.message}</p>
          </div>
        )}
      </div>

      <button type="submit" className="form-button">
        {buttonText}
      </button>

      <p className="form-text">
        {formText}{" "}
        <Link to={link} className="form-link">
          {textLink}
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
