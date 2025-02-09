// import { FC } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Icon from "./Icon";
// import { useDispatch } from "react-redux";
// import { logInThunk, registerThunk } from "../redux/auth/operations";
// import { AppDispatch } from "../redux/store";
// import { IForms, IFormsBD } from "../types";
// import { Link, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// interface IFormText {
//   formText: string;
//   link: string;
//   textLink: string;
//   buttonText: string;
//   isInput: boolean;
// }

const FormProfile = () => {
  // const dispatch = useDispatch<AppDispatch>();

  // const location = useLocation();

  // const schema = yup
  //   .object({
  //     name: yup.string(),
  //     email: yup.string().email().required("Email is required"),
  //     tel: yup.number(),
  //   })
  //   .required();

  // const {
  //   register,
  //   handleSubmit,

  //   formState: { errors },
  // } = useForm<IFormsProfile>({
  //   resolver: yupResolver(schema),
  // });

  // const onSubmit = async (data: IForms) => {
  //   try {
  //     if (location.pathname === "/register") {
  //       const dataBD: IFormsBD = {
  //         name: data.name!,
  //         email: data.email,
  //         password: data.password,
  //       };
  //       await dispatch(registerThunk(dataBD));

  //       if (errors) {
  //         return toast.error("Something went wrong...");
  //       }

  //       toast.success("Registration successful!");
  //     } else {
  //       const dataBD: IFormsBD = {
  //         email: data.email,
  //         password: data.password,
  //       };
  //       await dispatch(logInThunk(dataBD));

  //       if (errors) {
  //         return toast.error("Something went wrong...");
  //       }
  //     }
  //   } catch {
  //     toast.error("Something went wrong, please try again.");
  //   }
  // };

  return (
    <>FormProfile</>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div className="wrap-input">
    //     {isInput && (
    //       <div>
    //         <input {...register("name")} className="input" />
    //         <p className="form-errors">{errors.name?.message}</p>
    //       </div>
    //     )}

    //     <div>
    //       <input {...register("email")} className="input" />
    //       <p className="form-errors">{errors.email?.message}</p>
    //     </div>

    //     <div>
    //       <input {...register("tel")} className="input" />
    //       <p className="form-errors">{errors.email?.message}</p>
    //     </div>
    //   </div>

    //   <button type="submit" className="form-button">
    //     {buttonText}
    //   </button>
    // </form>
  );
};

export default FormProfile;
