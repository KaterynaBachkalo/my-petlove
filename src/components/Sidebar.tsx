import { FC } from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { logOutThunk } from "../redux/auth/operations";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar: FC<IProps> = ({ onClose, isOpen }) => {
  const isAuthorized = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div onClick={onClose} className="menu-close-wrap">
        <Icon name="close" width={32} height={32} className="menu-close" />
      </div>

      <nav className="menu-nav">
        <ul className="menu-list">
          <li>
            <NavLink to="/news" className="menu-link">
              <p className="">News</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notices" className="menu-link">
              <p className="">Find pet</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" className="menu-link">
              <p className="">Our friends</p>
            </NavLink>
          </li>
        </ul>
      </nav>

      {isAuthorized ? (
        <div className="menu-auth-list">
          <div onClick={handleLogOut} className="menu-link register">
            <p className="menu-logout">Logout</p>
          </div>
        </div>
      ) : (
        <ul className="menu-auth-list">
          <li className="menu-link login">
            <NavLink to="/login" className="">
              <p className="menu-login">Log in</p>
            </NavLink>
          </li>

          <li className="menu-link register">
            <NavLink to="/register" className="">
              <p className="menu-register">Registration</p>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
