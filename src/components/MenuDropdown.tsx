import React, { FC, LegacyRef, RefObject, useRef } from "react";
import useCloseDropdown from "../utils/useCloseDropdown";

interface IProps {
  onSelect: (value: string) => void;
  onClose: (value: boolean) => void;
  ref: LegacyRef<HTMLDivElement>;
  data: string[];
}

const MenuDropdown: FC<IProps> = React.forwardRef(
  ({ onSelect, onClose, data }, ref) => {
    const handleItemClick = (selectedCategory: string) => {
      onSelect(selectedCategory);
    };

    const handleClickShowAll = () => {
      const selectedCategory = "Show all";
      onSelect(selectedCategory);
    };

    const inputRef = useRef(null);

    useCloseDropdown(onClose, inputRef, ref as RefObject<HTMLDivElement>);

    return (
      <div ref={inputRef}>
        <div>
          <ul className="menu-categories-list">
            <li className="menu-categories-item" onClick={handleClickShowAll}>
              Show all
            </li>
            {data &&
              data.map((item) => (
                <li
                  className="menu-categories-item"
                  key={item}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
);

export default MenuDropdown;
