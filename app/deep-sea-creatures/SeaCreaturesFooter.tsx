"use client";

import { useEffect } from "react";

import {
  Button,
  ButtonColor,
  ButtonType,
  CheckmarkIcon,
  HelpIcon,
} from "../_components";
import { useFooterContent } from "../_providers/lib";

export function SeaCreaturesFooter() {
  const { setFooterContent } = useFooterContent();

  useEffect(() => {
    const helpButton = (
      <Button
        key="0"
        id="help-button"
        color={ButtonColor.TransparentWhite}
        icon={<HelpIcon />}
        text="Help"
        type={ButtonType.Hoverable}
        onClick={() => {}}
      />
    );
    const catchMultiselectButton = (
      <Button
        key="1"
        id="catch-multi-select"
        color={ButtonColor.TransparentWhite}
        icon={<CheckmarkIcon />}
        text="Mark as caught"
        type={ButtonType.Hoverable}
        onClick={() => {}}
      />
    );

    setFooterContent([helpButton, catchMultiselectButton]);

    return () => setFooterContent([]); // cleanup on unmount
  }, [setFooterContent]);

  return null;
}
