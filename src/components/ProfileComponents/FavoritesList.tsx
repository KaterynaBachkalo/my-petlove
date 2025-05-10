import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";
import { selectNotices } from "../../redux/pet/selectors";
import { fetchNotices } from "../../redux/pet/operations";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { FetchParams } from "../../types";
import NoticeCard from "../NoticeCard";
import { clearState } from "../../redux/pet/petSlice";
import { Link } from "react-router-dom";
import { useTheme } from "../../utils/useTheme";

const FavoritesList = () => {
  const { theme } = useTheme();

  const currentUser = useSelector(selectCurrentUser);

  const favorites = currentUser.favorites;

  const notices = useSelector(selectNotices);

  const limit = 1000;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const queryParams: FetchParams = {
      page: 1,
      limit,
      title: null,
      category: null,
      sex: null,
      species: null,
      sort: null,
    };

    dispatch(fetchNotices(queryParams));

    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <div className="favorites-wrap">
      {favorites.length !== 0 ? (
        notices
          ?.filter((notice) => favorites.includes(notice._id))
          .map((notice) => <NoticeCard key={notice._id} data={notice} />)
      ) : (
        <div className={`favorites-no-pets ${theme === "light" ? "" : "dark"}`}>
          <p>
            Oops, <span>looks like there aren't any furries</span> on our
            adorable page yet. Do not worry! View your pets on the{" "}
            <Link to="/notices" className="favorites-link">
              "find your favorite pet"
            </Link>{" "}
            page and add them to your favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
