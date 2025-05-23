import { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import useCloseModals from "../../utils/useCloseModals";
import Icon from "../ComponentsForDesign/Icon";
import { useTheme } from "../../utils/useTheme";

const modalRoot: Element | null = document.querySelector("#root-modal");

interface IProps {
  onClose: (value: boolean) => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  useCloseModals(onClose, modalRef, backdropRef);

  const { theme } = useTheme();

  return (
    modalRoot &&
    createPortal(
      <div className="modal-backdrop" ref={backdropRef}>
        <div className={`modal-container`}>
          <div
            className={`modal ${theme === "light" ? "" : "dark"}`}
            ref={modalRef}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="modal-btnClose" onClick={() => onClose(false)}>
              <Icon
                className="modal-icon"
                name="close"
                width={18}
                height={18}
              />
            </button>
            <div>{children}</div>
          </div>
        </div>
      </div>,

      modalRoot
    )
  );
};

export default Modal;
