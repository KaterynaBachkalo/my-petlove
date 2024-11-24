import { FC } from "react";
import { INotice } from "../types";
import Icon from "./Icon";
import { fixDate } from "../utils/formatDate";

const NoticeCard: FC<INotice> = ({
  title,
  imgURL,
  popularity,
  name,
  birthday,
  sex,
  species,
  category,
  comment,
}) => {
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
          <button type="button" className="notices-button">
            Read more
          </button>
          <div className="notices-add-favorite">
            <Icon className="icon-heart" name="heart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeCard;
