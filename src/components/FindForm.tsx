import { useForm } from "react-hook-form";

import { FC } from "react";
import Icon from "./Icon";
import { useLocation } from "react-router-dom";

interface IForms {
  title: string;
}

interface IProps {
  setSearchQuery: (value: string) => void;
  placeholder: string;
}

const FindForm: FC<IProps> = ({ setSearchQuery, placeholder }) => {
  const { register, handleSubmit } = useForm<IForms>();

  const location = useLocation();

  const onSubmit = (data: IForms) => {
    setSearchQuery(data.title);
  };

  const handleBlur = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`find-form-wrap ${
          placeholder === "Category" || placeholder === "By gender"
            ? "category"
            : placeholder === "By type"
            ? "type"
            : ""
        }`}
      >
        <input
          {...register("title")}
          className={`input find-input ${
            location.pathname === "/notices" ? "notices" : ""
          }`}
          placeholder={placeholder}
          onBlur={handleBlur}
        />

        <button type="submit" className="find-form-button">
          <div className="find-form-icon">
            <Icon name="search" className="icon-search" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default FindForm;
