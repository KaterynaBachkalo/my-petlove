import { FC, useState } from "react";
import Icon from "./Icon";

interface IProps {
  setSearchQuery: (value: string) => void;
  text: string;
}

const SortButton: FC<IProps> = ({ setSearchQuery, text }) => {
  const [addCross, setAddCross] = useState(false);

  const handleClick = () => {
    if (addCross) {
      // Clear the filter if it's already active
      setSearchQuery("");
      setAddCross(false);
    } else {
      // Apply the filter
      setSearchQuery(text);
      setAddCross(true);
    }
  };

  return (
    <div className="button-wrap">
      <button
        type="submit"
        className={`sort-button ${addCross} ? "cross" : ""`}
        onClick={handleClick}
      >
        {text}
        {addCross && <Icon className="icon-cross" name="close" />}
      </button>
    </div>
  );
};

export default SortButton;
