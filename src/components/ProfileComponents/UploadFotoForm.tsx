import { ChangeEvent, forwardRef, useState } from "react";
import Icon from "../ComponentsForDesign/Icon";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";
import { useLocation } from "react-router-dom";
import { decodeFileName } from "../../utils/decodeFileName";
import axios from "axios";
import { toast } from "react-toastify";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement> | File) => void;
  isModal: boolean;
}

const UploadFotoForm = forwardRef<HTMLInputElement, IProps>(
  ({ onChange, isModal }, ref) => {
    const [url, setUrl] = useState<string>("");

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

    const fetchImageFromUrl = async () => {
      if (!url) return;

      try {
        const proxyUrl = `http://localhost:4000/api/proxy?url=${encodeURIComponent(
          url
        )}`;

        const response = await axios.get(proxyUrl, { responseType: "blob" });

        const blob = response.data;

        const file = new File([blob], url, {
          type: blob.type,
        });

        onChange(file);
      } catch {
        toast.error("Error loading image by URL");
      }
    };

    const handleBlur = () => {
      fetchImageFromUrl();
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
                location.pathname === "/add-pet" ? undefined : correctName || ""
              }
              className="selected-file-input"
              placeholder="Enter URL"
              onChange={handleUrlChange}
              onBlur={handleBlur}
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
