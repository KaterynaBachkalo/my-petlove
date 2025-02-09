import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/selectors";

const MyPetList = () => {
  const currentUser = useSelector(selectCurrentUser);

  const favorites = currentUser.favorites;

  return (
    <>
      {favorites ? (
        favorites.map((fav) => <li key={fav}>{fav}</li>)
      ) : (
        <p>No favorites yet</p>
      )}
    </>
  );
};

export default MyPetList;
