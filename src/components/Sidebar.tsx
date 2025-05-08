import { FC, useState, useRef } from "react";
import Icon from "./ComponentsForDesign/Icon";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/auth/selectors";
import LogoutModal from "./Modals/LogoutModal";
import Modal from "./Modals/Modal";
import useCloseModals from "../utils/useCloseModals";
import { useTheme } from "../utils/useTheme";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar: FC<IProps> = ({ onClose, isOpen }) => {
  const [openModal, setOpenModal] = useState(false);

  const isAuthorized = useSelector(selectIsAuthenticated);

  const location = useLocation();

  const { theme } = useTheme();

  const currentUser = useSelector(selectCurrentUser);

  const openLogoutModal = () => {
    setOpenModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeLogoutModal = () => {
    setOpenModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  const sidebarRef = useRef(null);

  useCloseModals(onClose, sidebarRef);

  return (
    <div
      className={`menu ${isOpen ? "open" : ""} ${
        location.pathname === "/home"
          ? theme === "light"
            ? "home"
            : "home dark"
          : ""
      }`}
      ref={sidebarRef}
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
          <li onClick={onClose}>
            <NavLink
              to="/news"
              className={`menu-link ${
                location.pathname === "/home" ? "home" : ""
              }`}
            >
              <p className="">News</p>
            </NavLink>
          </li>
          <li onClick={onClose}>
            <NavLink
              to="/notices"
              className={`menu-link ${
                location.pathname === "/home" ? "home" : ""
              }`}
            >
              <p className="">Find pet</p>
            </NavLink>
          </li>
          <li onClick={onClose}>
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
            <p className="menu-logout">Log out</p>
          </button>
        </div>
      ) : (
        <ul className="menu-auth-list">
          <li
            className={`menu-link login ${
              location.pathname === "/home" ? "home" : ""
            }`}
          >
            <NavLink to="/login" onClick={onClose}>
              <p className="menu-login">Log in</p>
            </NavLink>
          </li>

          <li
            className={`menu-link register ${
              location.pathname === "/home" ? "home" : ""
            }`}
          >
            <NavLink to="/register" onClick={onClose}>
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
