import { ChangeEvent, forwardRef } from "react";
import { IUser } from "../../types";
import LogoAuthImage from "../../img/logoAuth.png";
import UploadFotoForm from "../ProfileComponents/UploadFotoForm";
import FormProfile from "../ProfileComponents/FormProfile";

export interface IUserDate {
  userData: IUser;
  onClose: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const EditModal = forwardRef<HTMLInputElement, IUserDate>(
  ({ userData, onClose, onChange }, ref) => {
    return (
      <>
        <h2 className="profile-title">Edit information</h2>

        <div className="img-wrap card-info-modal profile">
          <img
            src={userData.avatar ? userData.avatar : LogoAuthImage}
            alt={userData.name ?? "User avatar"}
            className="card-info-modal-img logout profile"
          />
          <UploadFotoForm onChange={onChange} ref={ref} isModal={true} />
        </div>

        <FormProfile onClose={onClose} userData={userData} />
      </>
    );
  }
);

export default EditModal;
