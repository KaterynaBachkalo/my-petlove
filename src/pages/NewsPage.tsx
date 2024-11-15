import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { selectCurrentPage, selectNews } from "../redux/pet/selectors";
import { useEffect } from "react";
import { AppDispatch } from "../redux/store";
import { fetchNews } from "../redux/pet/operations";
import { FetchParams } from "../types";

const NewsPage = () => {
  const news = useSelector(selectNews);
  console.log(news);

  const limit = 6;

  const currentPage = useSelector(selectCurrentPage);

  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const queryParams: FetchParams = {
      page: currentPage,
      limit: limit,
      title: title ? title : null,
    };
    dispatch(fetchNews(queryParams));
  }, [currentPage, dispatch, title]);

  return (
    <>
      {news && news.length > 0 ? (
        news.map(({ imageURL, title, text, date, url }) => (
          <div key={url}>
            <img src={imageURL} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <p>{date}</p>
            <Link to={url}>Read more</Link>
          </div>
        ))
      ) : (
        <p>There are news yet</p>
      )}
    </>
  );
};

export default NewsPage;
