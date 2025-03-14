import { FC } from "react";
import { INoticeDate } from "../../types";
import Icon from "../ComponentsForDesign/Icon";
import { fixDate } from "../../utils/formatDate";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";

const CardInfoModal: FC<INoticeDate> = ({
  data,
  addToFavorite,
  deleteFavorite,
}) => {
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

  const currentUser = useSelector(selectCurrentUser);

  const favorites = currentUser.favorites;

  return (
    <>
      <div className="notices-card-top">
        <div className="img-wrap card-info-modal">
          <img src={imgURL} alt={title} className="card-info-modal-img" />
          <p className="card-info-modal-category">
            {category
              ? category.charAt(0).toUpperCase() +
                category.slice(1).toLowerCase()
              : ""}
          </p>
        </div>
        <div>
          <h3 className="notices-title card-info-modal">{title}</h3>
          {popularity && (
            <div className="notices-icon-wrap card-info-modal">
              <Icon className="icon-star" name="star" />
              <p className="notices-popularity">{popularity}</p>
            </div>
          )}
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
        <p className="notices-text card-info-modal">{comment && ""}</p>
      </div>

      <div className="card-info-modal-wrap">
        {_id && favorites.includes(_id) ? (
          <div
            className="notices-button card-info-modal"
            onClick={deleteFavorite}
          >
            <button type="button" className="card-info-modal-add-to">
              Delete
            </button>
            <Icon
              className="icon-heart card-info-modal"
              name="icon-heart-circle"
            />
          </div>
        ) : (
          <div
            className="notices-button card-info-modal"
            onClick={addToFavorite}
          >
            <button type="button" className="card-info-modal-add-to">
              Add to
            </button>
            <Icon className="icon-heart card-info-modal" name="heart" />
          </div>
        )}
      </div>
    </>
  );
};

export default CardInfoModal;
