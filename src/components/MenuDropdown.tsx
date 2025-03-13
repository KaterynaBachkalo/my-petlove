import React, { FC, LegacyRef, RefObject, useRef } from "react";
import useCloseDropdown from "../utils/useCloseDropdown";
import { useLocation } from "react-router-dom";

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
      onSelect("");
    };

    const inputRef = useRef(null);

    const location = useLocation();

    useCloseDropdown(onClose, inputRef, ref as RefObject<HTMLDivElement>);

    return (
      <div
        className={`menu-modal ${
          location.pathname === "/add-pet" ? "add" : ""
        }`}
      >
        <div className="menu-modal-container">
          <ul className="menu-categories-list" ref={inputRef}>
            {location.pathname !== "/add-pet" && (
              <li className="menu-categories-item" onClick={handleClickShowAll}>
                Show all
              </li>
            )}
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
