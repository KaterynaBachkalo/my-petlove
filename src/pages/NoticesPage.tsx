import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectNotices,
  selectTotalNotices,
} from "../redux/pet/selectors";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNotices } from "../redux/pet/operations";
import { FetchParams } from "../types";
import FindForm from "../components/FindForm";
import FindFormList from "../components/FindFormList";
import SortButton from "../components/SortButton";
import Pagination from "../components/Pagination";
import NoticeCard from "../components/NoticeCard";

const NoticesPage = () => {
  const notices = useSelector(selectNotices);

  const limit = 6;

  const currentPage = useSelector(selectCurrentPage);
  const totalNotices = useSelector(selectTotalNotices);

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
              <NoticeCard
                key={title}
                name={name}
                title={title}
                imgURL={imgURL}
                species={species}
                birthday={birthday}
                sex={sex}
                category={category}
                comment={comment}
                popularity={popularity}
              />
            )
          )
        ) : (
          <p>There are news yet</p>
        )}
      </div>

      <Pagination totalItems={totalNotices} />
    </div>
  );
};

export default NoticesPage;
