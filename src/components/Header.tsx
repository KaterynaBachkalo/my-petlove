import { Link, NavLink, useLocation } from "react-router-dom";
import LogoAuthImage from "../img/logoAuth.png";
import Icon from "./Icon";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/auth/selectors";
import Modal from "./Modals/Modal";
import LogoutModal from "./Modals/LogoutModal";

interface IProps {
  onOpen: () => void;
}

const Header: FC<IProps> = ({ onOpen }) => {
  const isAuthorized = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  const [openModal, setOpenModal] = useState(false);

  const openLogoutModal = () => {
    setOpenModal(true);
    document.body.classList.add("body-scroll-lock");
  };

  const closeLogoutModal = () => {
    setOpenModal(false);
    document.body.classList.remove("body-scroll-lock");
  };

  return (
    <header className={`header ${location.pathname !== "/home" ? "" : "home"}`}>
      <nav className="header-nav">
        <Link
          to={isAuthorized ? "/home" : "/"}
          className={`header-nav-logo ${
            location.pathname !== "/home" ? "" : "home"
          }`}
        >
          <p
            className={`header-logo-text ${
              location.pathname !== "/home" ? "" : "home"
            }`}
          >
            petl
            <Icon
              name="icon-heart-circle"
              className={`logo-heart ${
                location.pathname !== "/home" ? "" : "home"
              }`}
            />
            ve
          </p>
        </Link>

        <nav className="header-menu-nav">
          <ul className="header-menu-list">
            <li>
              <NavLink to="/news" className="header-menu-link">
                <p className="">News</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/notices" className="header-menu-link">
                <p className="">Find pet</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/friends" className="header-menu-link">
                <p className="">Our friends</p>
              </NavLink>
            </li>
          </ul>
        </nav>

        {!isAuthorized && (
          <ul className="header-auth-list">
            <li className="header-link login">
              <NavLink to="/login">
                <p className="menu-login">Log in</p>
              </NavLink>
            </li>

            <li className="header-link register">
              <NavLink to="/register">
                <p className="menu-register">Registration</p>
              </NavLink>
            </li>
          </ul>
        )}

        {isAuthorized && (
          <div className="header-auth-list">
            <button
              type="button"
              onClick={openLogoutModal}
              className={`menu-link register ${
                location.pathname === "/home" ? "home" : ""
              }`}
            >
              <p className="menu-logout">Logout</p>
            </button>
          </div>
        )}

        {openModal && (
          <Modal onClose={closeLogoutModal}>
            <LogoutModal userData={currentUser} onClose={closeLogoutModal} />
          </Modal>
        )}

        {currentUser && isAuthorized && (
          <Link to="/profile" className="header-wrap">
            <img src={LogoAuthImage} alt="logo" className="logo-image" />
            <p
              className={`header-name ${
                location.pathname !== "/home" ? "" : "home"
              }`}
            >
              {currentUser.name}
            </p>
          </Link>
        )}

        <div onClick={onOpen} className="menu-burger-wrap">
          <Icon
            name="menu-burger"
            width={32}
            height={32}
            className={`menu-burger ${
              location.pathname !== "/home" ? "" : "home"
            }`}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
