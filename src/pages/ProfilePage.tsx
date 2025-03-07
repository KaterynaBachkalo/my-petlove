import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/selectors";
import Icon from "../components/ComponentsForDesign/Icon";
import LogoAuthImage from "../img/logoAuth.png";
import FavoritesList from "../components/ProfileComponents/FavoritesList";
import MyPetsList from "../components/ProfileComponents/MyPetsList";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Modal from "../components/Modals/Modal";
import LogoutModal from "../components/Modals/LogoutModal";
import EditModal from "../components/Modals/EditModal";
import { AppDispatch } from "../redux/store";
import { updateAvatarThunk } from "../redux/auth/operations";
import UploadFotoForm from "../components/ProfileComponents/UploadFotoForm";
import MyInformationForm from "../components/ProfileComponents/MyInformationForm";
import ViewedList from "../components/ProfileComponents/ViewedList";
import Loader from "../components/ComponentsForDesign/Loader/Loader";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [openLogModal, setOpenLogModal] = useState(false);

  const [openEdModal, setOpenEdModal] = useState(false);

  const [file, setFile] = useState<File | null>();

  const [onClickedFav, setOnClickedFav] = useState(true);

  const [onClickedViewed, setOnClickedViewed] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch<AppDispatch>();

  const handleEditModal = (act: string) => {
    if (act === "open") {
      setOpenEdModal(true);
      document.body.classList.add("body-scroll-lock");
    } else {
      setOpenEdModal(false);
      document.body.classList.remove("body-scroll-lock");
    }
  };

  const handleLogoutModal = (act: string) => {
    if (act === "open") {
      setOpenLogModal(true);
      document.body.classList.add("body-scroll-lock");
    } else {
      setOpenLogModal(false);
      document.body.classList.remove("body-scroll-lock");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement> | File) => {
    if (event instanceof File) {
      setFile(event);
    } else {
      const files = event.target.files;
      if (files && files.length > 0) {
        const selected = files[0];
        setFile(selected);
      }
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
    <div>
      {!currentUser && <Loader />}
      {currentUser && (
        <div className="profile-main-wrap">
          <div className="profile-background my">
            <div className="profile-user-wrapper">
              <div className="profile-user-wrap name">
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
                onClick={() => handleEditModal("open")}
              >
                <Icon
                  name="edit"
                  width={18}
                  height={18}
                  className="profile-edit-icon"
                />
              </button>
            </div>

            <div className="pet-avatar">
              <img
                src={
                  currentUser?.avatar ? `${currentUser.avatar}` : LogoAuthImage
                }
                alt={currentUser.name ?? "User avatar"}
                className="card-info-modal-img logout profile"
              />
            </div>

            <div className="img-wrap card-info-modal profile">
              <UploadFotoForm
                onChange={handleChange}
                ref={fileInputRef}
                isModal={false}
              />
            </div>

            <MyInformationForm />

            <div className="profile-user-wrapper addPet">
              <h3 className="profile-title">My pets</h3>

              <Link to="/add-pet" className="profile-user-wrap">
                <p className="profile-name">Add pet</p>
                <Icon
                  name="icon-plus"
                  width={18}
                  height={18}
                  className="icon-plus"
                />
              </Link>
            </div>

            <MyPetsList />

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleLogoutModal("open");
              }}
              className="menu-link register"
            >
              <p className="menu-logout">Log out</p>
            </button>
          </div>

          <div className="profile-right-part">
            <div className="profile-tab">
              <div
                className={`profile-user-wrap my-pets ${
                  (onClickedFav && !onClickedViewed) ||
                  (!onClickedFav && !onClickedViewed)
                    ? ""
                    : "unactive"
                }`}
                onClick={() => {
                  setOnClickedFav(true);
                  setOnClickedViewed(false);
                }}
              >
                <p className="profile-name">My favorite pets</p>
              </div>

              <div
                className={`profile-user-wrap my-pets ${
                  onClickedViewed && !onClickedFav ? "" : "unactive"
                }`}
                onClick={() => {
                  setOnClickedViewed(true);
                  setOnClickedFav(false);
                }}
              >
                <p className="profile-name">Viewed</p>
              </div>
            </div>
            <div className="profile-background favorite">
              {onClickedFav && !onClickedViewed && <FavoritesList />}

              {onClickedViewed && !onClickedFav && <ViewedList />}
            </div>
          </div>

          {openLogModal && (
            <Modal onClose={() => handleLogoutModal("close")}>
              <LogoutModal
                userData={currentUser}
                onClose={() => handleLogoutModal("close")}
              />
            </Modal>
          )}

          {openEdModal && (
            <Modal onClose={() => handleEditModal("close")}>
              <EditModal
                userData={currentUser}
                onClose={() => handleEditModal("close")}
                onChange={handleChange}
              />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
