import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";
import { selectNotices } from "../../redux/pet/selectors";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { FetchParams } from "../../types";
import { fetchNotices } from "../../redux/pet/operations";
import { clearState } from "../../redux/pet/petSlice";
import NoticeCard from "../NoticeCard";
import { Link } from "react-router-dom";
import { useTheme } from "../../utils/useTheme";

const ViewedList = () => {
  const { theme } = useTheme();

  const currentUser = useSelector(selectCurrentUser);

  const viewed = currentUser.viewed;

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
      {viewed.length !== 0 ? (
        notices
          ?.filter((notice) => viewed.includes(notice._id))
          .map((notice) => <NoticeCard key={notice._id} data={notice} />)
      ) : (
        <div className={`favorites-no-pets ${theme === "light" ? "" : "dark"}`}>
          <p>
            Oops, <span>looks like there aren't any viewed furries</span> on our
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

export default ViewedList;
