import { Controller, useForm } from "react-hook-form";

import { FC, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { useSearchParams } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../redux/store";
import { categories } from "../data/categories";
import { gender } from "../data/gender";
import { types } from "../data/types";
import { ISearchQuery } from "../types";

interface IForms {
  category?: string;
  gender?: string;
  type?: string;
}
interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
  placeholder: string;
}

const FindFormList: FC<IProps> = ({ placeholder, setSearchQuery }) => {
  const schema = yup
    .object({
      category: yup.string(),
      gender: yup.string(),
      type: yup.string(),
    })
    .required();

  const { handleSubmit, control, setValue } = useForm<IForms>({
    resolver: yupResolver(schema),
  });

  // const dispatch = useDispatch<AppDispatch>();

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") ?? ""
  );
  const [selectedGender, setSelectedGender] = useState(
    searchParams.get("gender") ?? ""
  );
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") ?? ""
  );

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") ?? "");
    setSelectedGender(searchParams.get("gender") ?? "");
    setSelectedType(searchParams.get("type") ?? "");
  }, [searchParams]);

  // const reset = () => {
  //   setSelectedCategory("");
  //   setSelectedGender("");
  //   setSelectedType("");
  // };

  const buttonRef = useRef(null);
  const itemCategoriesRef = useRef(null);
  const itemGenderRef = useRef(null);
  const itemTypeRef = useRef(null);

  const [isMenuCategories, setMenuCategories] = useState(false);
  const [isMenuGenders, setMenuGenders] = useState(false);
  const [isMenuTypes, setMenuTypes] = useState(false);

  const onSubmit = (data: Partial<IForms>) => {
    setSearchQuery((prev) => ({
      ...prev,
      ...data,
    }));

    handleSearch(data);
  };

  // const onSubmit = (data: IForms) => {
  //   const { category, gender, type } = data;
  //   if (!category && !gender && !type) {
  //     return;
  //   }

  //   dispatch(
  //     setFilter({
  //       category,
  //       gender,
  //       type,
  //     })
  //   );

  //   handleSearch();

  //   dispatch(clearState());
  // };

  const handleBlur = () => {
    handleSubmit(onSubmit)();
  };

  const toggleMenu = () => {
    if (placeholder === "Category") {
      setMenuCategories(!isMenuCategories);
    } else if (placeholder === "By gender") {
      setMenuGenders(!isMenuGenders);
    } else {
      setMenuTypes(!isMenuTypes);
    }
  };

  const handleSelectMenu = (selected: string) => {
    if (placeholder === "Category") {
      setSelectedCategory(selected);
    } else if (placeholder === "By gender") {
      setSelectedGender(selected);
    } else {
      setSelectedType(selected);
    }
    setMenuCategories(false);
    setMenuGenders(false);
    setMenuTypes(false);
  };

  // useEffect(() => {
  //   handleSearch();
  // }, [selectedCategory, selectedGender, selectedType, handleSearch]);

  const handleSearch = (data: Partial<IForms>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // updateParam("category", selectedCategory);
    // updateParam("gender", selectedGender);
    // updateParam("type", selectedType);

    setSearchParams(params); // Оновлюємо пошукові параметри в URL
  };

  useEffect(() => {
    setValue("category", selectedCategory);
    setValue("gender", selectedGender);
    setValue("type", selectedType);
  }, [selectedCategory, setValue, selectedGender, selectedType]);

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
        <Controller
          name={
            placeholder === "Category"
              ? "category"
              : placeholder === "By gender"
              ? "gender"
              : "type"
          }
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="input find-input"
              placeholder={placeholder}
              value={
                placeholder === "Category"
                  ? selectedCategory
                  : placeholder === "By gender"
                  ? selectedGender
                  : selectedType
              }
              onBlur={handleBlur}
            />
          )}
        />

        <button
          type="submit"
          className="find-form-button"
          onClick={toggleMenu}
          ref={buttonRef}
        >
          <div className="find-form-icon">
            <Icon name="chevron-down" className="icon-search" />
          </div>
        </button>

        {isMenuCategories && (
          <MenuDropdown
            onSelect={handleSelectMenu}
            onClose={() => setMenuCategories(false)}
            ref={itemCategoriesRef}
            data={categories}
          />
        )}
        {isMenuGenders && (
          <MenuDropdown
            onSelect={handleSelectMenu}
            onClose={() => setMenuGenders(false)}
            ref={itemGenderRef}
            data={gender}
          />
        )}
        {isMenuTypes && (
          <MenuDropdown
            onSelect={handleSelectMenu}
            onClose={() => setMenuTypes(false)}
            ref={itemTypeRef}
            data={types}
          />
        )}
      </div>
    </form>
  );
};

export default FindFormList;
