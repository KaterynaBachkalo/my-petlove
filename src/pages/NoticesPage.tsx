import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, selectNotices } from "../redux/pet/selectors";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNotices } from "../redux/pet/operations";
import { FetchParams } from "../types";
import FindForm from "../components/FindForm";
import Icon from "../components/Icon";
import FindFormList from "../components/FindFormList";
import SortButton from "../components/SortButton";
import { fixDate } from "../utils/formatDate";

const NoticesPage = () => {
  const notices = useSelector(selectNotices);

  const limit = 6;

  const currentPage = useSelector(selectCurrentPage);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const queryParams: FetchParams = {
      page: currentPage,
      limit,
      title: searchQuery ? searchQuery : null,
    };
    dispatch(fetchNotices(queryParams));
  }, [currentPage, dispatch, searchQuery]);

  return (
    <div className="notices-container">
      <div className="notices-main-wrap">
        <h2 className="notices-main-title">Find your favorite pet</h2>
        <div className="notices-form-wrap">
          <div className="notices-form-top">
            <FindForm setSearchQuery={setSearchQuery} placeholder="Search" />

            <FindFormList
              setSearchQuery={setSearchQuery}
              placeholder="Category"
            />
            <FindFormList
              setSearchQuery={setSearchQuery}
              placeholder="By gender"
            />
            <FindFormList
              setSearchQuery={setSearchQuery}
              placeholder="By type"
            />

            <FindForm setSearchQuery={setSearchQuery} placeholder="Location" />
          </div>
          <div className="notices-stroke"></div>
          <div className="sort-button-wrap">
            <SortButton setSearchQuery={setSearchQuery} text="Popular" />
            <SortButton setSearchQuery={setSearchQuery} text="Unpopular" />
            <SortButton setSearchQuery={setSearchQuery} text="Cheap" />
            <SortButton setSearchQuery={setSearchQuery} text="Expensive" />
          </div>
        </div>
      </div>
      <div className="news-cards notices-cards">
        {notices && notices.length > 0 ? (
          notices.map(
            ({
              name,
              title,
              imgURL,
              species,
              birthday,
              sex,
              category,
              comment,
              popularity,
            }) => (
              <div key={title} className="notices-card">
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

                <div className="notices-button-wrap">
                  <button type="button" className="notices-button">
                    Read more
                  </button>
                  <div className="notices-add-favorite">
                    <Icon className="icon-heart" name="heart" />
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <p>There are news yet</p>
        )}
      </div>
    </div>
  );
};

export default NoticesPage;
