import { useForm } from "react-hook-form";
import { FC, useEffect } from "react";
import Icon from "./Icon";
import { useLocation, useSearchParams } from "react-router-dom";
import { ISearchQuery } from "../types";

interface IForms {
  title: string;
}

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
  placeholder: string;
}

const FindForm: FC<IProps> = ({ setSearchQuery, placeholder }) => {
  const { handleSubmit, register, setValue, watch } = useForm<IForms>();

  const mylocation = useLocation();

  const onSubmit = (data: Partial<IForms>) => {
    setSearchQuery((prev) => ({
      ...prev,
      ...data,
    }));

    handleSearch(data);
  };

  const handleBlur = () => {
    handleSubmit(onSubmit)();
  };

  const [searchParams, setSearchParams] = useSearchParams();

  watch("title");

  useEffect(() => {
    const currentTitle = searchParams.get("title") ?? "";
    setValue("title", currentTitle);
  }, [searchParams, setValue]);

  const handleSearch = (newParams: Partial<IForms>) => {
    const updatedParams = new URLSearchParams(searchParams);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        updatedParams.set(key, value);
      } else {
        updatedParams.delete(key);
      }
    });

    setSearchParams(updatedParams);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
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
            mylocation.pathname === "/notices" ? "notices" : ""
          }`}
          placeholder={placeholder}
          onBlur={handleBlur}
        />
        <button type="button" className="find-form-button">
          <div className="find-form-icon">
            <Icon name="search" className="icon-search" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default FindForm;
