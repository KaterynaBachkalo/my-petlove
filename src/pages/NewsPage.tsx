import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { selectNews, selectTotalNews } from "../redux/pet/selectors";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNews } from "../redux/pet/operations";
import { FetchParams, ISearchQuery } from "../types";
import FindForm from "../components/FindForm";
import { formatDate } from "../utils/formatDate";
import Pagination from "../components/Pagination";

const NewsPage = () => {
  const news = useSelector(selectNews);

  const limit = 6;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("page")) {
      setSearchParams({ page: "1" });
    }
  }, [searchParams, setSearchParams]);

  const currentPage = Number(searchParams.get("page")) || 1;

  const totalNews = useSelector(selectTotalNews);

  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({
    title: null,
    category: null,
    sex: null,
    species: null,
    location: null,
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const queryParams: FetchParams = {
      page: currentPage,
      limit,
      title: searchQuery?.title ? searchQuery?.title : null,
      category: null,
      sex: null,
      species: null,
      location: null,
    };
    dispatch(fetchNews(queryParams));
  }, [currentPage, dispatch, searchQuery]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  return (
    <div className="news-container">
      <div className="news-main-wrap">
        <h2 className="news-main-title">News</h2>
        <FindForm setSearchQuery={setSearchQuery} placeholder="Search" />
      </div>
      <div className="news-cards">
        {news && news.length > 0 ? (
          news.map(({ imgUrl, title, text, date, url }) => (
            <div key={url} className="news-card">
              <div className="news-card-top">
                <img src={imgUrl} alt={title} className="news-img" />
                <h3 className="news-title">{title}</h3>
                <p className="news-text">{text}</p>
              </div>
              <div className="news-wrap">
                <p className="news-date">{formatDate(date)}</p>
                <Link to={url} className="news-link">
                  Read more
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>There are news yet</p>
        )}
      </div>
      <Pagination
        totalItems={totalNews}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NewsPage;
