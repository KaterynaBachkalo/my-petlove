import { Link, useLocation } from "react-router-dom";
import LogoAuthImage from "../img/logoAuth.png";
import Icon from "./Icon";
import { FC } from "react";
// import { useDispatch } from "react-redux";
// import { logOutThunk } from "../redux/auth/operations";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../redux/auth/selectors";

interface IProps {
  onOpen: (value: boolean) => void;
}

const Header: FC<IProps> = ({ onOpen }) => {
  // const currentUser = useSelector(selectCurrentUser);

  // const dispatch = useDispatch();

  const handleLogOut = () => {
    // dispatch(logOutThunk() as any);
  };

  const location = useLocation();

  const formattedPathname =
    location.pathname === "/dashboard"
      ? location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
      : `All ` + location.pathname.slice(1);

  return (
    <header>
      <nav>
        <Link to="/">
          <p>
            petl
            <Icon
              name="icon-heart-circle"
              width={17}
              height={17}
              className=""
            />
            ve
          </p>
        </Link>

        <div>
          <img src={LogoAuthImage} alt="logo" />
        </div>
        <div onClick={() => onOpen(true)}>
          <Icon name="menu-burger" width={32} height={32} className="" />
        </div>

        <div>
          <Link to="/">
            <p>Medicine store</p>
          </Link>
          <div>
            <Link to={location.pathname}>{formattedPathname}</Link>
          </div>
        </div>
      </nav>
      <div onClick={handleLogOut}>
        <Icon name="phone" width={13} height={14} className="" />
      </div>
    </header>
  );
};

export default Header;
