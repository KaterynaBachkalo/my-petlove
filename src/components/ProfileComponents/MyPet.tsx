import Icon from "../ComponentsForDesign/Icon";
import { IMyPet } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deletePet } from "../../redux/auth/operations";
import { addToNotices, deleteFromNotices } from "../../redux/pet/operations";
import { useEffect, useState } from "react";
import { selectNotices } from "../../redux/pet/selectors";

interface IProps {
  data: IMyPet;
}

const MyPet = ({ data }: IProps) => {
  const { sex, imgURL, title, name, birthday, species, _id } = data;

  const [isCheck, setCheck] = useState(false);

  const notices = useSelector(selectNotices);

  const dispatch = useDispatch<AppDispatch>();

  const deleteMyPet = () => {
    if (_id) {
      dispatch(deletePet(_id));
      dispatch(deleteFromNotices(_id));
    }
  };

  const publicMyPet = () => {
    if (!isCheck) {
      if (_id) dispatch(addToNotices(_id));
      setCheck(true);
    }
  };

  const deleteFromPublicMyPet = () => {
    if (isCheck) {
      if (_id) dispatch(deleteFromNotices(_id));
      setCheck(false);
    }
  };

  useEffect(() => {
    if (_id) {
      const existPet = notices.find((pet) => pet._id === _id);
      setCheck(!!existPet);
    }
  }, [notices, _id]);

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
      <div className="my-pet-button-wrapper">
        <button
          type="button"
          onClick={publicMyPet}
          className="form-button submit to-publish"
        >
          {isCheck ? (
            <>
              Published <Icon name="icon-check" className="icon-check" />
            </>
          ) : (
            "To publish"
          )}
        </button>
        <button
          type="button"
          onClick={deleteFromPublicMyPet}
          className="form-button back remove"
        >
          Remove from publication
        </button>
      </div>
    </div>
  );
};

export default MyPet;
