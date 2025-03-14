import Icon from "../ComponentsForDesign/Icon";
import { IMyPet } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deletePet } from "../../redux/auth/operations";
import { addToNotices, deleteFromNotices } from "../../redux/pet/operations";

interface IProps {
  data: IMyPet;
}

const MyPet = ({ data }: IProps) => {
  const { sex, imgURL, title, name, birthday, species, _id } = data;

  const dispatch = useDispatch<AppDispatch>();

  const deleteMyPet = () => {
    if (_id) dispatch(deletePet(_id));
  };

  const publicMyPet = () => {
    if (_id) dispatch(addToNotices(_id));
  };

  const deleteFromPublicMyPet = () => {
    if (_id) dispatch(deleteFromNotices(_id));
  };

  return (
    <div className="my-pet-border">
      <div className="my-pet-wrapper">
        {imgURL ? (
          <img src={imgURL.toString()} alt={title} className="my-pet-img" />
        ) : (
          <Icon className="icon-paw" name="icon-paw" />
        )}
        <div className="my-pet-middle-part">
          <h3 className="my-pet-title" title={title}>
            {title}
          </h3>
          <div className="my-pet-text-wrapper">
            <div className="notices-text-wrap my-pet">
              <p className="notices-title-text">Name</p>
              <p className="my-pet-notices-text" title={name}>
                {name}
              </p>
            </div>
            <div className="notices-text-wrap my-pet">
              <p className="notices-title-text">Birthday</p>
              <p>{birthday}</p>
            </div>
            <div className="notices-text-wrap my-pet">
              <p className="notices-title-text">Sex</p>
              <p>{sex}</p>
            </div>
            <div className="notices-text-wrap my-pet">
              <p className="notices-title-text">Species</p>
              <p>{species}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-pet-delete" onClick={deleteMyPet}>
        <Icon className="icon-heart delete" name="delete" />
      </div>
      <button type="button" onClick={publicMyPet}>
        To public
      </button>
      <button type="button" onClick={deleteFromPublicMyPet}>
        Delete from publication
      </button>
    </div>
  );
};

export default MyPet;
