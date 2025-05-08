import { Controller, useForm } from "react-hook-form";

import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setCurrentPage } from "../../redux/pet/petSlice";
import Icon from "../ComponentsForDesign/Icon";
import MenuDropdown from "../MenuDropdown";
import { gender } from "../../data/gender";
import { types } from "../../data/types";
import { categories } from "../../data/categories";
import { ISearchQuery } from "../../types";
import { useTheme } from "../../utils/useTheme";

interface IForms {
  category?: string;
  sex?: string;
  species?: string;
}
interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
  placeholder: string;
}

const FindFormList: FC<IProps> = ({ placeholder, setSearchQuery }) => {
  const schema = yup
    .object({
      category: yup.string(),
      sex: yup.string(),
      species: yup.string(),
    })
    .required();

  const { theme } = useTheme();

  const { handleSubmit, control, setValue } = useForm<IForms>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const menuRef = useRef(null);
  const itemCategoriesRef = useRef(null);
  const itemGenderRef = useRef(null);
  const itemTypeRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") ?? ""
  );
  const [selectedGender, setSelectedGender] = useState(
    searchParams.get("sex") ?? ""
  );
  const [selectedType, setSelectedType] = useState(
    searchParams.get("species") ?? ""
  );

  const [isMenuCategories, setMenuCategories] = useState(false);
  const [isMenuGenders, setMenuGenders] = useState(false);
  const [isMenuTypes, setMenuTypes] = useState(false);

  const onSubmit = (data: IForms) => {
    setSearchQuery((prev) => ({
      ...prev,
      ...data,
    }));

    handleSearch(data);
    dispatch(setCurrentPage(1));
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
    const data: Partial<IForms> = {};

    if (placeholder === "Category") {
      setSelectedCategory(selected);
      data.category = selected || undefined;
    } else if (placeholder === "By gender") {
      setSelectedGender(selected);
      data.sex = selected || undefined;
    } else {
      setSelectedType(selected);
      data.species = selected || undefined;
    }

    setMenuCategories(false);
    setMenuGenders(false);
    setMenuTypes(false);

    handleSearch(data);
    handleSubmit(onSubmit)();
  };

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

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") ?? "");
    setSelectedGender(searchParams.get("sex") ?? "");
    setSelectedType(searchParams.get("species") ?? "");
  }, [searchParams]);

  useEffect(() => {
    setValue("category", selectedCategory || "");
    setValue("sex", selectedGender || "");
    setValue("species", selectedType || "");
  }, [selectedCategory, selectedGender, selectedType, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={menuRef} className="form">
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
              ? "sex"
              : "species"
          }
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`input ${theme === "light" ? "" : "dark"} find-input`}
              placeholder={placeholder}
              value={
                placeholder === "Category"
                  ? selectedCategory
                  : placeholder === "By gender"
                  ? selectedGender
                  : selectedType
              }
            />
          )}
        />

        <button
          type="button"
          className="find-form-button"
          onClick={toggleMenu}
          ref={
            placeholder === "Category"
              ? itemCategoriesRef
              : placeholder === "By gender"
              ? itemGenderRef
              : itemTypeRef
          }
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
