import { FC } from "react";
import Icon from "./ComponentsForDesign/Icon";

interface IProps {
  handleCheckGender: (value: string) => void;
  selectedGender: string | null;
}

const GenderButtons: FC<IProps> = ({ handleCheckGender, selectedGender }) => {
  return (
    <>
      <div className="addPet-icon-wrap">
        <div
          className={`addPet-icon woman ${
            selectedGender === "woman" ? "active" : ""
          }`}
          onClick={() => handleCheckGender("woman")}
        >
          <Icon
            name="icon-female"
            className={`icon-woman ${
              selectedGender === "woman" ? "active" : ""
            }`}
          />
        </div>
        <div
          className={`addPet-icon man ${
            selectedGender === "man" ? "active" : ""
          }`}
          onClick={() => handleCheckGender("man")}
        >
          <Icon
            name="icon-male"
            className={`icon-man ${selectedGender === "man" ? "active" : ""}`}
          />
        </div>
        <div
          className={`addPet-icon man-woman ${
            selectedGender === "man-woman" ? "active" : ""
          }`}
          onClick={() => handleCheckGender("man-woman")}
        >
          <Icon
            name="icon-male-female"
            className={`icon-man-woman ${
              selectedGender === "man-woman" ? "active" : ""
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default GenderButtons;
