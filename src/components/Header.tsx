import { Link } from "react-router-dom";
import LogoAuthImage from "../img/logoAuth.png";
import Icon from "./Icon";
import { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/auth/selectors";

interface IProps {
  onOpen: (value: boolean) => void;
}

const Header: FC<IProps> = ({ onOpen }) => {
  const isAuthorized = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to={isAuthorized ? "/home" : "/"} className="header-nav-logo">
          <p className="header-logo-text">
            petl
            <Icon
              name="icon-heart-circle"
              width={17}
              height={17}
              className="logo-heart"
            />
            ve
          </p>
        </Link>

        {isAuthorized && (
          <div className="header-wrap">
            <img src={LogoAuthImage} alt="logo" className="logo-image" />
            <p className="header-name">{currentUser.name}</p>
          </div>
        )}
        <div onClick={() => onOpen(true)}>
          <Icon name="menu-burger" width={32} height={32} className="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
