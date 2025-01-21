import { FC } from "react";
import FindForm from "./FindForm";
import FindFormList from "./FindFormList";
import SortButton from "./SortButton";
import { ISearchQuery } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { resetFilter, setFilter } from "../redux/filterSlice";
import { selectFilter } from "../redux/pet/selectors";
import { useSearchParams } from "react-router-dom";

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
}

const FilterForms: FC<IProps> = ({ setSearchQuery }) => {
  const dispatch = useDispatch<AppDispatch>();

  const filter = useSelector(selectFilter);

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

    if (filter === sortType) {
      dispatch(resetFilter());
    } else {
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
