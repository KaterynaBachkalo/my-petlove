import { useEffect, RefObject } from "react";

type CloseFunction = (value: boolean) => void;

const useCloseModals = (
  func: CloseFunction,
  myRef: RefObject<HTMLElement>,
  backdropRef: RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.code === "Escape") {
        func(false);
      }
    };

    const handleClose = (event: MouseEvent) => {
      if (
        myRef.current &&
        backdropRef.current &&
        !myRef.current.contains(event.target as Node) &&
        backdropRef.current.contains(event.target as Node)
      ) {
        func(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClose);
    document.body.classList.add("body-scroll-lock");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClose);
      document.body.classList.remove("body-scroll-lock");
    };
  }, [func, myRef, backdropRef]);
};

export default useCloseModals;
