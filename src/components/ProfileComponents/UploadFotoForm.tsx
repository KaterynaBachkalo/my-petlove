import { ChangeEvent, forwardRef, useState } from "react";
import Icon from "../ComponentsForDesign/Icon";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";
import { useLocation } from "react-router-dom";
import { decodeFileName } from "../../utils/decodeFileName";
import fetchImageByURL from "../../redux/fetchImageByURL";
import { useTheme } from "../../utils/useTheme";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement> | File) => void;
  isModal: boolean;
}

const UploadFotoForm = forwardRef<HTMLInputElement, IProps>(
  ({ onChange, isModal }, ref) => {
    const [url, setUrl] = useState<string>("");

    const { theme } = useTheme();

    const location = useLocation();

    const currentUser = useSelector(selectCurrentUser);
    const userAvatarURL = currentUser.avatar;

    const formattedUserAvatarURL = userAvatarURL
      .split("_")
      .slice(1, 3)
      .join("_");

    const correctName = decodeFileName(formattedUserAvatarURL);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event);
    };

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value);
    };

    const handleBlur = () => {
      fetchImageByURL(url, onChange);
    };

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
          <div className="selected-file-input-wrap my-pet">
            <input
              type="text"
              value={
                location.pathname === "/add-pet"
                  ? undefined
                  : correctName || url
              }
              className={`selected-file-input ${
                theme === "light" ? "" : "dark"
              }`}
              placeholder="Enter URL"
              onChange={handleUrlChange}
              onBlur={handleBlur}
            />
            <label htmlFor="inputFile" className="uploadPhoto">
              <div
                className={`profile-upload-wrap ${
                  theme === "light" ? "" : "dark"
                }`}
              >
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
