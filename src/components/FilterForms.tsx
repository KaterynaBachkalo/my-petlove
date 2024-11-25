import { FC, useState } from "react";
import FindForm from "./FindForm";
import FindFormList from "./FindFormList";
import SortButton from "./SortButton";
import { ISearchQuery } from "../types";

interface IProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>;
}

const FilterForms: FC<IProps> = ({ setSearchQuery }) => {
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const handleSortClick = (sortType: string) => {
    if (activeSort === sortType) {
      setActiveSort(null);
    } else {
      setActiveSort(sortType);
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

          <FindForm setSearchQuery={setSearchQuery} placeholder="Location" />
        </div>
        <div className="notices-stroke"></div>
        <div className="sort-button-wrap">
          <SortButton
            setSearchQuery={setSearchQuery}
            text="Popular"
            isActive={activeSort === "Popular"}
            onClick={() => handleSortClick("Popular")}
          />
          <SortButton
            setSearchQuery={setSearchQuery}
            text="Unpopular"
            isActive={activeSort === "Unpopular"}
            onClick={() => handleSortClick("Unpopular")}
          />
          <SortButton
            setSearchQuery={setSearchQuery}
            text="Cheap"
            isActive={activeSort === "Cheap"}
            onClick={() => handleSortClick("Cheap")}
          />
          <SortButton
            setSearchQuery={setSearchQuery}
            text="Expensive"
            isActive={activeSort === "Expensive"}
            onClick={() => handleSortClick("Expensive")}
          />
        </div>
      </div>
    </>
  );
};

export default FilterForms;
