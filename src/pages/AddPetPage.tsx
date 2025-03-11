import UploadFotoForm from "../components/ProfileComponents/UploadFotoForm";
import { useDispatch } from "react-redux";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AppDispatch } from "../redux/store";
import Icon from "../components/ComponentsForDesign/Icon";

import GenderButtons from "../components/GenderButtons";
import FormPetProfile from "../components/FormPetProfile";
import Picture from "../components/Picture";

import MobImage1x from "../img/addPet_page/mob/image@1x.png";
import MobImage2x from "../img/addPet_page/mob/image@2x.png";
import DeskImage1x from "../img/addPet_page/desk/image@1x.png";
import DeskImage2x from "../img/addPet_page/desk/image@2x.png";
import TabImage1x from "../img/addPet_page/tab/image@1x.png";
import TabImage2x from "../img/addPet_page/tab/image@2x.png";

const AddPetPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [errorMessage, setErrorMessage] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>(null);

  const [fileUrl, setFileUrl] = useState<File | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleChange = (input: ChangeEvent<HTMLInputElement> | File) => {
    if (input instanceof File) {
      //URL
      setPreviewUrl(null);
      setFile(null);
      setFileUrl(input);
    } else {
      //Computer
      const files = input.target.files;
      if (files && files.length > 0) {
        const selected = files[0];

        resetUrlInput();
        setFile(selected);

        const objectUrl = URL.createObjectURL(selected);
        setPreviewUrl(objectUrl);
      }
    }
  };

  useEffect(() => {
    if (file) {
      setFile(file);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }

    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [file, dispatch, previewUrl]);

  const handleCheckGender = (gender: string) => {
    setSelectedGender(gender);
  };

  const petData = {
    sex: selectedGender,
    imgURL: file || fileUrl,
  };

  const resetPetData = () => {
    setPreviewUrl(null);
    setFile(null);
    resetUrlInput();
    setSelectedGender(null);
  };

  const resetUrlInput = () => {
    setFileUrl(null);
    const input = document.querySelector(
      ".selected-file-input"
    ) as HTMLInputElement | null;

    if (input) {
      input.value = "";
    }
  };

  return (
    <section className="add-pet-section">
      <Picture
        mob1x={MobImage1x}
        mob2x={MobImage2x}
        tab1x={TabImage1x}
        tab2x={TabImage2x}
        desk1x={DeskImage1x}
        desk2x={DeskImage2x}
        alt="dog"
        className="addPet-img"
      />
      <div className="addPet-background">
        <h2 className="addPet-title">
          Add my pet/ <span>Personal details</span>
        </h2>

        <GenderButtons
          handleCheckGender={handleCheckGender}
          selectedGender={selectedGender}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />

        <div className="pet-avatar">
          {previewUrl && !fileUrl?.name ? (
            <img
              src={previewUrl}
              alt={file?.name ?? "Pet avatar"}
              className="icon-pet-avatar"
            />
          ) : !previewUrl && fileUrl?.name ? (
            <img
              src={fileUrl?.name}
              alt={fileUrl?.name ?? "Pet avatar"}
              className="icon-pet-avatar"
            />
          ) : (
            <Icon name="icon-paw" className="icon-pet-avatar" />
          )}
        </div>

        <div className="img-wrap card-info-modal profile">
          <UploadFotoForm
            onChange={handleChange}
            ref={fileInputRef}
            isModal={true}
          />
        </div>

        <FormPetProfile
          petData={petData}
          resetPetData={resetPetData}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </section>
  );
};

export default AddPetPage;
