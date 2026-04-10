"use client";

import { useEffect, useState } from "react";

import {
  Button,
  ButtonColor,
  ButtonType,
  CheckmarkIcon,
  Modal,
  ModalPosition,
  ModalType,
  HelpModalContents,
  IconKinds,
  Icon,
} from "..";

import { useFooterContent } from "../../_lib";

export function CrittersFooter() {
  const { setFooterContent } = useFooterContent();
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const helpModal = (
      <Modal
        key="0"
        content={<HelpModalContents setIsOpen={setIsHelpModalOpen} />}
        type={ModalType.Horizontal}
        position={ModalPosition.Center}
        isOpen={isHelpModalOpen}
        setIsOpen={setIsHelpModalOpen}
      />
    );

    const helpButton = (
      <Button
        key="1"
        id="help-button"
        color={ButtonColor.TransparentWhite}
        icon={<Icon kind={IconKinds.Help} />}
        text="Help"
        type={ButtonType.Hoverable}
        onClick={() => {
          setIsHelpModalOpen(true);
        }}
      />
    );
    const catchMultiselectButton = (
      <Button
        key="2"
        id="catch-multi-select"
        color={ButtonColor.TransparentWhite}
        icon={<Icon kind={IconKinds.CheckMark} />}
        text="Mark as caught"
        type={ButtonType.Hoverable}
        onClick={() => {}}
      />
    );

    setFooterContent([helpButton, helpModal, catchMultiselectButton]);

    return () => setFooterContent([]); // cleanup on unmount
  }, [setFooterContent, isHelpModalOpen, setIsHelpModalOpen]);

  return null;
}
