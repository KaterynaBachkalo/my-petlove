import { FC } from "react";
import { IUser } from "../../types";
import LogoAuthImage from "../../img/logoAuth.png";
import FormProfile from "../FormProfile";

export interface IUserDate {
  userData: IUser;
  onClose: () => void;
}

const EditModal: FC<IUserDate> = ({ userData, onClose }) => {
  return (
    <>
      <h2 className="profile-title">Edit information</h2>

      <div className="img-wrap card-info-modal profile">
        <img
          src={userData.avatar === "" ? LogoAuthImage : userData.avatar}
          alt={userData.name ?? "User avatar"}
          className="card-info-modal-img logout profile"
        />
        <p className="profile-upload">Upload photo</p>
      </div>

      <FormProfile onClose={onClose} userData={userData} />
    </>
  );
};

export default EditModal;
