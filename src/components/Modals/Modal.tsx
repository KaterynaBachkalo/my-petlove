import { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import useCloseModals from "../../utils/useCloseModals";
import Icon from "../Icon";

const modalRoot: Element | null = document.querySelector("#root-modal");

interface IProps {
  onClose: (value: boolean) => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useCloseModals(onClose, modalRef);

  return (
    modalRoot &&
    createPortal(
      <div className="modal-backdrop">
        <div className="modal-container">
          <div
            className="modal"
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
