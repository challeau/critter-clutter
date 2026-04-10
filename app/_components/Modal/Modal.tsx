import { Dispatch, SetStateAction } from "react";

import "./modal.css";
import { HorizontalModal, RoundModal, VerticalModal } from "../atoms";

export enum ModalType {
  Round = "round",
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export enum ModalPosition {
  Center = "center",
  Left = "left",
  Right = "right",
}

type ModalProps = {
  position: ModalPosition;
  type: ModalType;
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const backgrounds: Record<ModalType, React.ReactNode> = {
  [ModalType.Round]: <RoundModal />,
  [ModalType.Vertical]: <VerticalModal />,
  [ModalType.Horizontal]: <HorizontalModal />,
};

export function Modal(props: ModalProps) {
  const { position, type, content, isOpen, setIsOpen } = props;

  const background = backgrounds[type];
  const className = `modal ${type} ${position} flex-container-row`;

  return (
    <div
      className={className}
      style={isOpen ? {} : { display: "none" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="blob">{background}</div>
      <div className="modal-content flex-container-row">{content}</div>
    </div>
  );
}
