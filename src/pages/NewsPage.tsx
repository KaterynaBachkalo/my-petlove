import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNews, selectCurrentPage } from "../redux/pet/selectors";
import { useEffect, useState } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNews } from "../redux/pet/operations";
import { FetchParams } from "../types";
import FindForm from "../components/FindForm";
import { formatData } from "../utils/formatData";

const NewsPage = () => {
  const news = useSelector(selectNews);

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
    dispatch(fetchNews(queryParams));
  }, [currentPage, dispatch, searchQuery]);

  return (
    <div className="news-container">
      <div className="news-main-wrap">
        <h2 className="news-main-title">News</h2>
        <FindForm setSearchQuery={setSearchQuery} />
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
                <p className="news-date">{formatData(date)}</p>
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
    </div>
  );
};

export default NewsPage;
