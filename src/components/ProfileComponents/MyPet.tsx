import Icon from "../ComponentsForDesign/Icon";
import { IMyPet } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deletePet } from "../../redux/auth/operations";

interface IProps {
  data: IMyPet;
}

const MyPet = ({ data }: IProps) => {
  const { sex, imgURL, title, name, birthday, species, _id } = data;

  const dispatch = useDispatch<AppDispatch>();

  const deleteMyPet = () => {
    if (_id) {
      dispatch(deletePet(_id));
    }
  };

  return (
    <div className="notices-card profile">
      <div className="notices-card-top">
        {imgURL ? (
          <img src={imgURL.toString()} alt={title} className="notices-img" />
        ) : (
          <Icon className="icon-paw" name="icon-paw" />
        )}

        <div className="notices-text-wrapper">
          <div className="notices-text-wrap">
            <p className="notices-title-text">Name</p>
            <p>{name}</p>
          </div>
          <div className="notices-text-wrap">
            <p className="notices-title-text">Birthday</p>
            <p>{birthday}</p>
          </div>
          <div className="notices-text-wrap">
            <p className="notices-title-text">Sex</p>
            <p>{sex}</p>
          </div>
          <div className="notices-text-wrap">
            <p className="notices-title-text">Species</p>
            <p>{species}</p>
          </div>
        </div>
      </div>

      <div className="notices-button-wrap">
        <div className="notices-add-favorite" onClick={deleteMyPet}>
          <Icon className="icon-heart" name="delete" />
        </div>
      </div>
    </div>
  );
};

export default MyPet;
