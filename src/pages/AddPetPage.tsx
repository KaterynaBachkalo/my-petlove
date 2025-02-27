import UploadFotoForm from "../components/ProfileComponents/UploadFotoForm";
import { useDispatch } from "react-redux";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AppDispatch } from "../redux/store";
import Icon from "../components/ComponentsForDesign/Icon";
import MobImage1x from "../img/addPet_page/mob/image@1x.png";
import MobImage2x from "../img/addPet_page/mob/image@2x.png";
import DeskImage1x from "../img/addPet_page/desk/image@1x.png";
import DeskImage2x from "../img/addPet_page/desk/image@2x.png";
import TabImage1x from "../img/addPet_page/tab/image@1x.png";
import TabImage2x from "../img/addPet_page/tab/image@2x.png";
import GenderButtons from "../components/GenderButtons";
import FormPetProfile from "../components/FormPetProfile";

const AddPetPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [file, setFile] = useState<File | null>();

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selected = files[0];
      setFile(selected);

      const objectUrl = URL.createObjectURL(selected);
      setPreviewUrl(objectUrl);
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
    imgURL: file,
  };

  const resetPetData = () => {
    setPreviewUrl(null);
    petData.sex = "";
  };

  return (
    <>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${DeskImage1x} 1x, ${DeskImage2x} 2x`}
          type="image/png"
          width={592}
          height={654}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${TabImage1x} 1x, ${TabImage2x} 2x`}
          type="image/png"
          width={704}
        />
        <source
          media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
          srcSet={`${MobImage1x} 1x, ${MobImage2x} 2x`}
          type="image/png"
        />
        <img src={MobImage1x} alt="dog" className="addPet-img" />
      </picture>

      <div className="addPet-background">
        <h2 className="addPet-title">
          Add my pet/ <span>Personal details</span>
        </h2>

        <GenderButtons handleCheckGender={handleCheckGender} />

        <div className="img-wrap card-info-modal profile">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={file?.name ?? "Pet avatar"}
              className="pet-avatar"
            />
          ) : (
            <Icon name="icon-paw" className="" width={68} height={68} />
          )}
          <UploadFotoForm
            onChange={handleChange}
            ref={fileInputRef}
            isModal={true}
            petAvatarUrl={previewUrl}
          />
        </div>

        <FormPetProfile petData={petData} resetPetData={resetPetData} />
      </div>
    </>
  );
};

export default AddPetPage;
