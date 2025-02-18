import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";
import { selectNotices } from "../../redux/pet/selectors";
import { fetchNotices } from "../../redux/pet/operations";
// import { clearState } from "../../redux/pet/petSlice";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { FetchParams } from "../../types";
import NoticeCard from "../NoticeCard";

const FavoritesList = () => {
  const currentUser = useSelector(selectCurrentUser);

  const favorites = currentUser.favorites;

  const notices = useSelector(selectNotices);

  const limit = 6;

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

    // return () => {
    //   dispatch(clearState());
    // };
  }, [dispatch]);

  return (
    <div className="favorites-wrap">
      {favorites.length !== 0 ? (
        notices
          ?.filter((notice) => favorites.includes(notice._id))
          .map((notice) => <NoticeCard key={notice._id} data={notice} />)
      ) : (
        <p className="favorites-no-pets">No favorite pets yet :(</p>
      )}
    </div>
  );
};

export default FavoritesList;
