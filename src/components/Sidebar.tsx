import { FC, useState } from "react";
import Icon from "./Icon";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/auth/selectors";
import LogoutModal from "./Modals/LogoutModal";
import Modal from "./Modals/Modal";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar: FC<IProps> = ({ onClose, isOpen }) => {
  const [openModal, setOpenModal] = useState(false);

  const isAuthorized = useSelector(selectIsAuthenticated);

  const location = useLocation();

  const currentUser = useSelector(selectCurrentUser);

  const openLogoutModal = () => {
    setOpenModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeLogoutModal = () => {
    setOpenModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  return (
    <div
      className={`menu ${isOpen ? "open" : ""} ${
        location.pathname === "/home" ? "home" : ""
      }`}
    >
      <div onClick={onClose} className="menu-close-wrap">
        <Icon
          name="close"
          width={32}
          height={32}
          className={`menu-close ${
            location.pathname === "/home" ? "home" : ""
          }`}
        />
      </div>

      <nav className="menu-nav">
        <ul className="menu-list">
          <li>
            <NavLink
              to="/news"
              className={`menu-link ${
                location.pathname === "/home" ? "home" : ""
              }`}
            >
              <p className="">News</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notices"
              className={`menu-link ${
                location.pathname === "/home" ? "home" : ""
              }`}
            >
              <p className="">Find pet</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className={`menu-link ${
                location.pathname === "/home" ? "home" : ""
              }`}
            >
              <p className="">Our friends</p>
            </NavLink>
          </li>
        </ul>
      </nav>

      {isAuthorized ? (
        <div className="menu-auth-list">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              openLogoutModal();
            }}
            className={`menu-link register ${
              location.pathname === "/home" ? "home" : ""
            }`}
          >
            <p className="menu-logout">Logout</p>
          </button>
        </div>
      ) : (
        <ul className="menu-auth-list">
          <li
            className={`menu-link login ${
              location.pathname === "/home" ? "home" : ""
            }`}
          >
            <NavLink to="/login">
              <p className="menu-login">Log in</p>
            </NavLink>
          </li>

          <li
            className={`menu-link register ${
              location.pathname === "/home" ? "home" : ""
            }`}
          >
            <NavLink to="/register">
              <p className="menu-register">Registration</p>
            </NavLink>
          </li>
        </ul>
      )}
      {openModal && (
        <Modal onClose={closeLogoutModal}>
          <LogoutModal userData={currentUser} onClose={closeLogoutModal} />
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
