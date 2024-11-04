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
            <NavLink to="/dashboard" className="">
              <Icon name="dashboard" width={12} height={12} className="" />
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/orders" className="">
              <Icon name="busket" width={13} height={13} className="" />
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/products" className="">
              <Icon name="bottle" width={12} height={13} className="" />
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/suppliers" className="">
              <Icon name="bag" width={12} height={13} className="" />
            </NavLink>
          </li>

          <li className="">
            <NavLink to="/customers" className="">
              <Icon name="users" width={13} height={10} className="" />
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="" onClick={handleLogOut}>
        <Icon name="phone" width={13} height={14} className="" />
      </div>
    </div>
  );
};

export default Sidebar;
