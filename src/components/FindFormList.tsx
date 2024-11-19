import { useForm } from "react-hook-form";

import { FC } from "react";
import Icon from "./Icon";

interface IForms {
  title: string;
}

interface IProps {
  setSearchQuery: (value: string) => void;
  placeholder: string;
}

const FindFormList: FC<IProps> = ({ setSearchQuery, placeholder }) => {
  const { register, handleSubmit } = useForm<IForms>();

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
          className="input find-input"
          placeholder={placeholder}
          onBlur={handleBlur}
        />

        <button type="submit" className="find-form-button">
          <div className="find-form-icon">
            <Icon name="chevron-down" className="icon-search" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default FindFormList;
