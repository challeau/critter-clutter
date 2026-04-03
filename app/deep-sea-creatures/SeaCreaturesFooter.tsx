"use client";

import { useEffect, useState } from "react";

import {
  Button,
  ButtonColor,
  ButtonType,
  CheckmarkIcon,
  HelpIcon,
  Modal,
  ModalPosition,
  ModalType,
  HelpModalContents,
} from "../_components";
import { useFooterContent } from "../_providers/lib";
import { DeepSeaCreature, Fish } from "../_types";

export function SeaCreaturesFooter({
  creatures,
}: {
  creatures: DeepSeaCreature[];
}) {
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
        icon={<HelpIcon />}
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
        icon={<CheckmarkIcon />}
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
