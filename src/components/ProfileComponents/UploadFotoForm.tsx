import { ChangeEvent, forwardRef } from "react";
import Icon from "../ComponentsForDesign/Icon";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";
import { useLocation } from "react-router-dom";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isModal: boolean;
  petAvatarUrl?: string | null;
}

const UploadFotoForm = forwardRef<HTMLInputElement, IProps>(
  ({ onChange, isModal, petAvatarUrl }, ref) => {
    const currentUser = useSelector(selectCurrentUser);
    const userAvatarURL = currentUser.avatar;

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };

    const location = useLocation();

    return (
      <form>
        <input
          id="inputFile"
          type="file"
          onChange={handleFileChange}
          className="inputFile"
          ref={ref}
        />
        <label htmlFor="inputFile" className="uploadPhoto">
          {!isModal && <p className="profile-upload">Upload photo</p>}
        </label>

        {isModal && (
          <div className="selected-file-input-wrap">
            <input
              type="text"
              value={
                location.pathname === "/add-pet"
                  ? petAvatarUrl || ""
                  : userAvatarURL || ""
              }
              className="selected-file-input"
              placeholder="No file chosen"
              readOnly
            />
            <label htmlFor="inputFile" className="uploadPhoto">
              <div className="profile-upload-wrap">
                <p className="profile-upload edit">Upload photo</p>
                <Icon
                  name="icon-upload"
                  className="icon-upload"
                  width={18}
                  height={18}
                />
              </div>
            </label>
          </div>
        )}
      </form>
    );
  }
);

export default UploadFotoForm;
