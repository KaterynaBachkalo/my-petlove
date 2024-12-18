import { FC, useState } from "react";
import FindForm from "./FindForm";
import FindFormList from "./FindFormList";
import SortButton from "./SortButton";
import { ISearchQuery } from "../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { resetFilter, setFilter } from "../redux/filterSlice";

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
}

const FilterForms: FC<IProps> = ({ setSearchQuery }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [activeSort, setActiveSort] = useState<string>("");

  const handleSortClick = (sortType: string) => {
    if (activeSort === sortType) {
      setActiveSort("");
      dispatch(resetFilter());
    } else {
      setActiveSort(sortType);
      dispatch(setFilter(sortType));
    }
  };

  return (
    <>
      <div className="notices-form-wrap">
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
              isActive={activeSort === sortType}
              onClick={() => handleSortClick(sortType)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterForms;
