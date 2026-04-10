"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import "./critterViewModal.css";

import { ColorTheme, Critter, HemisphereType } from "@/app/_lib";

import { Modal, ModalPosition, ModalType } from "../Modal/Modal";
import {
  Calendar,
  Checkbox,
  CritterImageBlob,
  CritterNameBlob,
  Timelapse,
} from "../atoms";

type CritterViewModalProps = {
  critter: Critter | undefined;
  isCaught: boolean;
  setIsCaught: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  theme: ColorTheme;
  hemisphere: HemisphereType;
};

export function CritterViewModal(props: CritterViewModalProps) {
  const {
    critter,
    isCaught,
    setIsCaught,
    isOpen,
    setIsOpen,
    theme,
    hemisphere,
  } = props;

  if (!critter) {
    return <></>;
  }

  const image = (
    <div className="critter-image">
      <CritterImageBlob className="background" />
      <Image
        src={critter.render_url}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="critter-name flex-container-row">
        <CritterNameBlob className={`background ${theme}`} />
        <span className="name">{critter.name}</span>
      </div>
    </div>
  );

  const critterContent = (
    <div className="critter-view">
      {image}
      <Calendar
        months={critter.months_availability[hemisphere]}
        theme={theme}
      />
      <Timelapse {...critter.time_availability} />
      <Checkbox
        isChecked={isCaught}
        setIsChecked={setIsCaught}
        text={isCaught ? "Caught !" : "Not caught"}
        color={theme}
      />
    </div>
  );
  return (
    <Modal
      position={ModalPosition.Right}
      type={ModalType.Vertical}
      content={critterContent}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}
