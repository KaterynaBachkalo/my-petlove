import { FC } from "react";
import Icon from "./ComponentsForDesign/Icon";
import { useTheme } from "../utils/useTheme";

interface IProps {
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{
      title: string | null;
      category: string | null;
      sex: string | null;
      species: string | null;
      sort: string | null;
    }>
  >;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const SortButton: FC<IProps> = ({
  setSearchQuery,
  text,
  isActive,
  onClick,
}) => {
  const handleClick = () => {
    setSearchQuery((prev) => ({
      ...prev,
      sort: isActive ? "" : text,
    }));
    onClick();
  };
  const { theme } = useTheme();

  return (
    <div className="button-wrap">
      <button
        type="submit"
        className={`sort-button ${theme === "light" ? "" : "dark"} ${
          isActive ? "cross" : ""
        }`}
        onClick={handleClick}
      >
        {text}
        {isActive && <Icon className="icon-cross" name="close" />}
      </button>
    </div>
  );
};

export default SortButton;
