import { Link, NavLink, useLocation } from "react-router-dom";
import LogoAuthImage from "../img/logoAuth.png";
import Icon from "./Icon";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/auth/selectors";
import { AppDispatch } from "../redux/store";
import { logOutThunk } from "../redux/auth/operations";

interface IProps {
  onOpen: (value: boolean) => void;
}

const Header: FC<IProps> = ({ onOpen }) => {
  const isAuthorized = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <header className={`header ${location.pathname !== "/home" ? "" : "home"}`}>
      <nav className="header-nav">
        <Link to={isAuthorized ? "/home" : "/"} className="header-nav-logo">
          <p
            className={`header-logo-text ${
              location.pathname !== "/home" ? "" : "home"
            }`}
          >
            petl
            <Icon
              name="icon-heart-circle"
              width={17}
              height={17}
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
            <div
              onClick={handleLogOut}
              className={`menu-link register ${
                location.pathname === "/home" ? "home" : ""
              }`}
            >
              <p className="menu-logout">Logout</p>
            </div>
          </div>
        )}

        {currentUser && isAuthorized && (
          <div className="header-wrap">
            <img src={LogoAuthImage} alt="logo" className="logo-image" />
            <p
              className={`header-name ${
                location.pathname !== "/home" ? "" : "home"
              }`}
            >
              {currentUser.name}
            </p>
          </div>
        )}

        <div onClick={() => onOpen(true)} className="menu-burger-wrap">
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
