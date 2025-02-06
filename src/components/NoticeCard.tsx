import { FC, useState } from "react";
import { INoticeDate } from "../types";
import Icon from "./Icon";
import { fixDate } from "../utils/formatDate";
import CardInfoModal from "./Modals/CardInfoModal";
import Modal from "./Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { selectCurrentUser } from "../redux/auth/selectors";
import { addFavorites, deleteFavorites } from "../redux/auth/operations";
import UnathorizedInfoModal from "./Modals/UnathorizedInfoModal";

const NoticeCard: FC<INoticeDate> = ({ data }) => {
  const {
    title,
    imgURL,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
    _id,
  } = data;
  const [openCardInfo, setOpenCardInfo] = useState(false);

  const [openUnauthModal, setOpenUnauthModal] = useState(false);

  const currentUser = useSelector(selectCurrentUser);

  const favorites = currentUser.favorites;

  const dispatch = useDispatch<AppDispatch>();

  const openModal = () => {
    setOpenCardInfo(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeModal = () => {
    setOpenCardInfo(false);
    setOpenUnauthModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  const addToFavorite = () => {
    if (currentUser.email && _id) {
      dispatch(addFavorites(_id));
    } else {
      setOpenUnauthModal(true);
      document.body.classList.add("body-scroll-lock");
    }
  };

  const deleteFavorite = () => {
    if (currentUser.email && _id) {
      dispatch(deleteFavorites(_id));
    } else {
      setOpenUnauthModal(true);
      document.body.classList.add("body-scroll-lock");
    }
  };

  return (
    <>
      <div className="notices-card">
        <div className="notices-card-top">
          <img src={imgURL} alt={title} className="notices-img" />

          <div className="notices-title-wrap">
            <h3 className="notices-title">{title}</h3>
            <div className="notices-icon-wrap">
              <Icon className="icon-star" name="star" />
              <p className="notices-popularity">{popularity}</p>
            </div>
          </div>
          <div className="notices-text-wrapper">
            <div className="notices-text-wrap">
              <p className="notices-title-text">Name</p>
              <p>{name}</p>
            </div>
            <div className="notices-text-wrap">
              <p className="notices-title-text">Birthday</p>
              <p>{fixDate(birthday)}</p>
            </div>
            <div className="notices-text-wrap">
              <p className="notices-title-text">Sex</p>
              <p>{sex}</p>
            </div>
            <div className="notices-text-wrap">
              <p className="notices-title-text">Species</p>
              <p>{species}</p>
            </div>
            <div className="notices-text-wrap">
              <p className="notices-title-text">Category</p>
              <p>{category}</p>
            </div>
          </div>
          <p className="notices-text">{comment}</p>
        </div>

        <div className="notices-button-wrap">
          <button type="button" className="notices-button" onClick={openModal}>
            Read more
          </button>
          {_id && favorites.includes(_id) ? (
            <div className="notices-add-favorite" onClick={deleteFavorite}>
              <Icon className="icon-heart" name="icon-heart-circle" />
            </div>
          ) : (
            <div className="notices-add-favorite" onClick={addToFavorite}>
              <Icon className="icon-heart" name="heart" />
            </div>
          )}
        </div>
      </div>
      {openCardInfo && (
        <Modal onClose={closeModal}>
          <CardInfoModal
            key={_id}
            data={data}
            addToFavorite={addToFavorite}
            deleteFavorite={deleteFavorite}
          />
        </Modal>
      )}
      {openUnauthModal && (
        <Modal onClose={closeModal}>
          <UnathorizedInfoModal key={_id} data={data} />
        </Modal>
      )}
    </>
  );
};

export default NoticeCard;
