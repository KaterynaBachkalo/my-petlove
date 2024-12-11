import { useForm } from "react-hook-form";
import { FC, useEffect, useState } from "react";
import Icon from "./Icon";
import { useLocation, useSearchParams } from "react-router-dom";
import { ISearchQuery } from "../types";

interface IForms {
  title: string;
  location: string;
}

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
  placeholder: string;
}

const FindForm: FC<IProps> = ({ setSearchQuery, placeholder }) => {
  const { register, handleSubmit } = useForm<IForms>();

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

  const [, setTitle] = useState(searchParams.get("title") ?? "");

  // const [location, setLocation] = useState(searchParams.get("location") ?? "");

  useEffect(() => {
    setTitle(searchParams.get("title") ?? "");
  }, [searchParams]);

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
          {...register(placeholder === "Search" ? "title" : "location")}
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
