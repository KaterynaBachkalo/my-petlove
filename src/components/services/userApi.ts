import axios from "axios";
import { IFormInputs } from "../../types";

export const updateUserAvatar = async (newAvatar: File) => {
  const formData = new FormData();
  formData.append("avatar", newAvatar);
  const { data } = await axios.patch("/users/current/edit", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.avatarURL;
};

export const updateUserInfo = async (formData: IFormInputs) => {
  const { data } = await axios.put("/users/current/edit", formData);

  return data.user;
};
