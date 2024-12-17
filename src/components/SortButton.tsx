import { FC } from "react";
import Icon from "./Icon";

interface IProps {
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{
      title: string | null;
      category: string | null;
      sex: string | null;
      species: string | null;
      location: string | null;
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
      title: isActive ? "" : text, // Змінюємо тільки поле `title`
    }));
    onClick();
  };

  return (
    <div className="button-wrap">
      <button
        type="submit"
        className={`sort-button ${isActive ? "cross" : ""}`}
        onClick={handleClick}
      >
        {text}
        {isActive && <Icon className="icon-cross" name="close" />}
      </button>
    </div>
  );
};

export default SortButton;
