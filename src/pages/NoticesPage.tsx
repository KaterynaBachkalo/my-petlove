import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectNotices,
  selectTotalNotices,
} from "../redux/pet/selectors";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNotices } from "../redux/pet/operations";
import { FetchParams, ISearchQuery } from "../types";
import Pagination from "../components/Pagination";
import NoticeCard from "../components/NoticeCard";
import FilterForms from "../components/FilterForms";

const NoticesPage = () => {
  const notices = useSelector(selectNotices);

  const limit = 6;

  const currentPage = useSelector(selectCurrentPage);
  const totalNotices = useSelector(selectTotalNotices);

  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({
    title: null,
    category: null,
    gender: null,
    type: null,
    location: null,
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const queryParams: FetchParams = {
      page: currentPage,
      limit,
      title: searchQuery?.title ? searchQuery.title : null,
      category: searchQuery?.category ? searchQuery.category : null,
      gender: searchQuery?.gender ? searchQuery.gender : null,
      type: searchQuery?.type ? searchQuery.type : null,
      location: searchQuery?.location ? searchQuery.location : null,
    };
    dispatch(fetchNotices(queryParams));
  }, [currentPage, dispatch, searchQuery]);

  return (
    <div className="notices-container">
      <div className="notices-main-wrap">
        <h2 className="notices-main-title">Find your favorite pet</h2>
        <FilterForms setSearchQuery={setSearchQuery} />
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
