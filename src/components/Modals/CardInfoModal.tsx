import { FC, useState } from "react";
import { INoticeDate } from "../../types";
import Icon from "../Icon";
import { fixDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";

const CardInfoModal: FC<INoticeDate> = ({ data }) => {
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
  } = data;
  const [, setAddToFavorites] = useState(false);
  return (
    <>
      <div className="notices-card-top">
        <div className="img-wrap card-info-modal">
          <img src={imgURL} alt={title} className="card-info-modal-img" />
          <p className="card-info-modal-category">
            {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
          </p>
        </div>
        <div>
          <h3 className="notices-title card-info-modal">{title}</h3>
          <div className="notices-icon-wrap card-info-modal">
            <Icon className="icon-star" name="star" />
            <p className="notices-popularity">{popularity}</p>
          </div>
        </div>
        <div className="notices-text-wrapper card-info-modal">
          <div className="notices-text-wrap">
            <p className="notices-title-text">Name</p>
            <p>{name}</p>
          </div>
          <div className="notices-text-wrap card-info-modal">
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
        </div>
        <p className="notices-text card-info-modal">{comment}</p>
      </div>

      <div className="card-info-modal-wrap">
        <div className="notices-button card-info-modal">
          <button
            type="button"
            className="card-info-modal-add-to"
            onClick={() => setAddToFavorites(true)}
          >
            Add to
          </button>
          <Icon className="icon-heart card-info-modal" name="heart" />
        </div>

        <Link to="" className="card-info-modal-contact">
          Contact
        </Link>
      </div>
    </>
  );
};

export default CardInfoModal;
