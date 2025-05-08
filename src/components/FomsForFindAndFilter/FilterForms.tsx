import { FC } from "react";
import SortButton from "../SortButton";
import { ISearchQuery } from "../../types";
import { useSearchParams } from "react-router-dom";
import FindForm from "./FindForm";
import FindFormList from "./FindFormList";
import { useTheme } from "../../utils/useTheme";

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
}

const FilterForms: FC<IProps> = ({ setSearchQuery }) => {
  const { theme } = useTheme();

  const [searchParams, setSearchParams] = useSearchParams();

  const sortFromParams = searchParams.get("sort");

  const handleSortClick = (sortType: string) => {
    const updatedSort = sortFromParams === sortType ? "" : sortType;

    setSearchQuery((prev) => ({
      ...prev,
      sort: updatedSort,
    }));

    const newSearchParams = new URLSearchParams(searchParams);
    if (updatedSort) {
      newSearchParams.set("sort", updatedSort);
    } else {
      newSearchParams.delete("sort");
    }
    setSearchParams(newSearchParams);
  };

  return (
    <>
      <div className={`notices-form-wrap ${theme === "light" ? "" : "dark"}`}>
        <div className="notices-form-top">
          <FindForm setSearchQuery={setSearchQuery} placeholder="Search" />

          <FindFormList
            setSearchQuery={setSearchQuery}
            placeholder="Category"
          />
          <FindFormList
            setSearchQuery={setSearchQuery}
            placeholder="By gender"
          />
          <FindFormList setSearchQuery={setSearchQuery} placeholder="By type" />
        </div>

        <div className="notices-stroke"></div>

        <div className="sort-button-wrap">
          {["Popular", "Unpopular", "Cheap", "Expensive"].map((sortType) => (
            <SortButton
              key={sortType}
              setSearchQuery={setSearchQuery}
              text={sortType}
              isActive={sortFromParams === sortType.toLowerCase()}
              onClick={() => handleSortClick(sortType.toLowerCase())}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterForms;
