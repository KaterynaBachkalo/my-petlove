import { useDispatch, useSelector } from "react-redux";
import { selectNotices, selectTotalNotices } from "../redux/pet/selectors";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNotices } from "../redux/pet/operations";
import { FetchParams, ISearchQuery } from "../types";
import Pagination from "../components/Pagination";
import NoticeCard from "../components/NoticeCard";
import FilterForms from "../components/FilterForms";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "../redux/filterSlice";

const NoticesPage = () => {
  const notices = useSelector(selectNotices);

  const limit = 6;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("page")) {
      setSearchParams({ page: "1" });
    }
  }, [searchParams, setSearchParams]);

  const currentPage = Number(searchParams.get("page")) || 1;

  const totalNotices = useSelector(selectTotalNotices);

  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({
    title: searchParams.get("title") || null,
    category: searchParams.get("category") || null,
    gender: searchParams.get("gender") || null,
    type: searchParams.get("type") || null,
    location: searchParams.get("location") || null,
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

    dispatch(setFilter(searchQuery));
  }, [currentPage, dispatch, searchQuery]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

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

      <Pagination
        totalItems={totalNotices}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NoticesPage;
