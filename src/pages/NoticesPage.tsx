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
        <h2 className="news-main-title">Find your favorite pet</h2>
        <div className="notices-form-wrap">
          <div className="notices-form-top">
            <FindForm setSearchQuery={setSearchQuery} placeholder="Search" />
            <div className="wrap-form-lists">
              <FindFormList
                setSearchQuery={setSearchQuery}
                placeholder="Category"
              />
              <FindFormList
                setSearchQuery={setSearchQuery}
                placeholder="By gender"
              />
            </div>
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
      <div className="news-cards">
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

                <h3 className="notices-title">{title}</h3>
                <div>
                  <Icon className="star" name="icon-star" />
                  <p>{popularity}</p>
                </div>
                <div>
                  <div>
                    <p>Name</p>
                    <p>{name}</p>
                  </div>
                  <div>
                    <p>Birthday</p>
                    <p>{birthday}</p>
                  </div>
                  <div>
                    <p>Sex</p>
                    <p>{sex}</p>
                  </div>
                  <div>
                    <p>Species</p>
                    <p>{species}</p>
                  </div>
                  <div>
                    <p>Category</p>
                    <p>{category}</p>
                  </div>
                </div>
                <p className="notices-text">{comment}</p>

                <button type="button">Read more</button>
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
