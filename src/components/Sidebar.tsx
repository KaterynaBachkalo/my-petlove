import { FC } from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../redux/store";
// import { logOutThunk } from "../../redux/auth/operations";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar: FC<IProps> = ({ onClose }) => {
  //   const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    // dispatch(logOutThunk());
  };

  return (
    <div className="">
      <nav className="">
        <div onClick={onClose} className="">
          <Icon name="close" width={32} height={32} className="" />
        </div>

        <ul className="">
          <li className="">
            <NavLink to="/news" className="">
              <p className="">News</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/notices" className="">
              <p className="">Find pet</p>
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/friends" className="">
              <p className="">Our friends</p>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="" onClick={handleLogOut}>
        <Icon name="" width={13} height={14} className="" />
      </div>
    </div>
  );
};

export default Sidebar;
