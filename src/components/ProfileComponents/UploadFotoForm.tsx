import { ChangeEvent, forwardRef } from "react";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UploadFotoForm = forwardRef<HTMLInputElement, IProps>(
  ({ onChange }, ref) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event);
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
          <p className="profile-upload">Upload photo</p>
        </label>
      </form>
    );
  }
);

export default UploadFotoForm;
