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
import { clearState } from "../redux/pet/petSlice";

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
    sex: searchParams.get("sex") || null,
    species: searchParams.get("species") || null,
    sort: searchParams.get("sort") || null,
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const queryParams: FetchParams = {
      page: currentPage,
      limit,
      title: searchQuery?.title ? searchQuery.title : null,
      category: searchQuery?.category ? searchQuery.category : null,
      sex: searchQuery?.sex ? searchQuery.sex : null,
      species: searchQuery?.species ? searchQuery.species : null,
      sort: searchQuery?.sort ? searchQuery?.sort : null,
    };
    dispatch(clearState());
    dispatch(fetchNotices(queryParams));
  }, [currentPage, dispatch, searchQuery]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      page: String(newPage),
      ...(searchQuery.title && { title: String(searchQuery.title) }),
      ...(searchQuery.category && { category: String(searchQuery.category) }),
      ...(searchQuery.sex && { sex: String(searchQuery.sex) }),
      ...(searchQuery.species && { species: String(searchQuery.species) }),
    });
  };

  return (
    <div className="notices-container">
      <div className="notices-main-wrap">
        <h2 className="notices-main-title">Find your favorite pet</h2>
        <FilterForms setSearchQuery={setSearchQuery} />
      </div>
      <div className="news-cards notices-cards">
        {notices && notices.length > 0 ? (
          notices.map((notice) => <NoticeCard key={notice._id} data={notice} />)
        ) : (
          <p>There are news yet</p>
        )}
      </div>

      {totalNotices && (
        <Pagination
          totalItems={totalNotices}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default NoticesPage;
