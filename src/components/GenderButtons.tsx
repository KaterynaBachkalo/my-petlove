import { FC } from "react";
import Icon from "./ComponentsForDesign/Icon";

interface IProps {
  handleCheckGender: (value: string) => void;
}

const GenderButtons: FC<IProps> = ({ handleCheckGender }) => {
  return (
    <>
      <div className="addPet-icon-wrap">
        <div
          className="addPet-icon woman"
          onClick={() => handleCheckGender("woman")}
        >
          <Icon
            name="icon-female"
            className="icon-woman"
            width={20}
            height={20}
          />
        </div>
        <div
          className="addPet-icon man"
          onClick={() => handleCheckGender("man")}
        >
          <Icon name="icon-male" className="icon-man" width={20} height={20} />
        </div>
        <div
          className="addPet-icon man-woman"
          onClick={() => handleCheckGender("man-woman")}
        >
          <Icon
            name="icon-male-female"
            className="icon-man-woman"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default GenderButtons;
