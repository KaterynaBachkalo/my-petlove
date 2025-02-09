import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/selectors";
import Icon from "../components/Icon";
import LogoAuthImage from "../img/logoAuth.png";
import FavoritesList from "../components/FavoritesList";
import MyPetsList from "../components/MyPetsList";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Modal from "../components/Modals/Modal";
import LogoutModal from "../components/Modals/LogoutModal";
import EditModal from "../components/Modals/EditModal";
import { AppDispatch } from "../redux/store";
import { updateAvatarThunk } from "../redux/auth/operations";

const ProfilePage = () => {
  const [openLogModal, setOpenLogModal] = useState(false);

  const [openEdModal, setOpenEdModal] = useState(false);

  const [file, setFile] = useState<File | null>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch<AppDispatch>();

  const openEditModal = () => {
    setOpenEdModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeEditModal = () => {
    setOpenEdModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  const openLogoutModal = () => {
    setOpenLogModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeLogoutModal = () => {
    setOpenLogModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selected = files[0];
      setFile(selected);
    }
  };

  useEffect(() => {
    if (file) {
      dispatch(updateAvatarThunk(file));

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [file, dispatch]);

  return (
    <>
      <div className="profile-background my">
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

          <button
            type="button"
            className="profile-edit"
            onClick={openEditModal}
          >
            <Icon
              name="edit"
              width={18}
              height={18}
              className="profile-edit-icon"
            />
          </button>
        </div>

        <div className="img-wrap card-info-modal profile">
          <img
            src={currentUser.avatar === "" ? LogoAuthImage : currentUser.avatar}
            alt={currentUser.name ?? "User avatar"}
            className="card-info-modal-img logout profile"
          />

          <form>
            <input
              id="inputFile"
              type="file"
              onChange={handleChange}
              className=""
              ref={fileInputRef}
            />
            <label htmlFor="inputFile" className="uploadPhoto">
              <p className="profile-upload">Upload photo</p>
            </label>
          </form>
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
            value={currentUser.phone ?? "+380"}
            className="input"
            readOnly
          />
        </form>

        <div className="profile-user-wrapper addPet">
          <h3 className="profile-title">My pets</h3>

          <div className="profile-user-wrap">
            <p className="profile-name">Add pet</p>
            <Icon
              name="icon-plus"
              width={18}
              height={18}
              className="icon-plus"
            />
          </div>
        </div>

        <MyPetsList />
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            openLogoutModal();
          }}
          className="menu-link register"
        >
          <p className="menu-logout">Log out</p>
        </button>
      </div>

      <div className="profile-background">
        <div className="profile-user-wrap my-pets">
          <p className="profile-name">My favorite pets</p>
        </div>
        <FavoritesList />
      </div>
      {openLogModal && (
        <Modal onClose={closeLogoutModal}>
          <LogoutModal userData={currentUser} onClose={closeLogoutModal} />
        </Modal>
      )}

      {openEdModal && (
        <Modal onClose={closeEditModal}>
          <EditModal userData={currentUser} onClose={closeEditModal} />
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
