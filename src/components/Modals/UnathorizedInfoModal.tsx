import { FC } from "react";
import { INoticeDate } from "../../types";
import { NavLink } from "react-router-dom";

const UnathorizedInfoModal: FC<INoticeDate> = ({ data }) => {
  const { title, imgURL } = data;
  return (
    <>
      <div className="notices-card-top">
        <div className="img-wrap card-info-modal">
          <img src={imgURL} alt={title} className="card-info-modal-img" />
        </div>
        <div>
          <h3 className="unauth-info-modal-title">Attention</h3>
          <p className="unauth-info-modal-text">
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
        </div>
      </div>

      <div className="card-info-modal-wrap">
        <ul className="header-auth-list card-info-modal">
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
      </div>
    </>
  );
};

export default UnathorizedInfoModal;
