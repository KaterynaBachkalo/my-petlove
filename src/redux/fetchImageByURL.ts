import { toast } from "react-toastify";
import { petInstance } from "./auth/operations";
import { ChangeEvent } from "react";

const fetchImageByURL = async (
  url: string,
  onChange: (event: ChangeEvent<HTMLInputElement> | File) => void
) => {
  if (!url) return;

  try {
    const response = await petInstance.get(
      `proxy?url=${encodeURIComponent(url)}`,
      { responseType: "blob" }
    );

    const blob = response.data;

    const file = new File([blob], url, {
      type: blob.type,
    });

    onChange(file);
  } catch {
    toast.error("Error loading image by URL");
  }
};

export default fetchImageByURL;
