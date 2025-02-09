import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/selectors";
import Icon from "../components/Icon";
import LogoAuthImage from "../img/logoAuth.png";
import MyPetList from "../components/MyPetList";

const ProfilePage = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="profile-background">
      <div className="profile-user-wrapper">
        <div className="profile-user-wrap">
          <p className="profile-name">{currentUser.name}</p>
          <Icon
            name="icon-person"
            width={18}
            height={18}
            className="icon-person"
          />
        </div>

        <div className="profile-edit">
          <Icon
            name="edit"
            width={18}
            height={18}
            className="profile-edit-icon"
          />
        </div>
      </div>

      <div className="img-wrap card-info-modal profile">
        <img
          src={currentUser.avatar === "" ? LogoAuthImage : currentUser.avatar}
          alt={currentUser.name ?? "User avatar"}
          className="card-info-modal-img logout profile"
        />
        <p className="profile-upload">Upload photo</p>
      </div>

      <h2 className="profile-title">My information</h2>

      <form className="wrap-input profile">
        <input
          type="text"
          value={currentUser.name ?? "NONAME"}
          className="input"
          readOnly
        />
        <input
          type="email"
          value={currentUser.email ?? "email"}
          className="input"
          readOnly
        />
        <input
          type="tel"
          value={currentUser.phone ?? ""}
          className="input"
          readOnly
        />
      </form>

      <div className="profile-user-wrapper addPet">
        <h3 className="profile-title">My pets</h3>

        <div className="profile-user-wrap">
          <p className="profile-name">Add pet</p>
          <Icon name="icon-plus" width={18} height={18} className="icon-plus" />
        </div>
      </div>

      <MyPetList />
    </div>
  );
};

export default ProfilePage;
