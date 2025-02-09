import { FC } from "react";
import { IUser } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logOutThunk } from "../../redux/auth/operations";
import LogoAuthImage from "../../img/logoAuth.png";

export interface IUserDate {
  userData: IUser;
  onClose: () => void;
}

const LogoutModal: FC<IUserDate> = ({ userData, onClose }) => {
  const { avatar, name } = userData;

  console.log(avatar, name);

  const dispatch = useDispatch<AppDispatch>();

  const logOut = () => {
    dispatch(logOutThunk());
    onClose();
  };

  return (
    <>
      <div className="notices-card-top">
        <div className="img-wrap card-info-modal">
          <img
            src={avatar === "" ? LogoAuthImage : avatar}
            alt={name ?? "User avatar"}
            className="card-info-modal-img logout"
          />
        </div>

        <h3 className="unauth-info-modal-title logout">Already leaving?</h3>
      </div>

      <div className="card-info-modal-wrap">
        <ul className="logout-btn-list">
          <li>
            <button onClick={logOut} className="logout-btn yes">
              Yes
            </button>
          </li>

          <li>
            <button className="logout-btn cancel" onClick={onClose}>
              Cancel
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LogoutModal;
