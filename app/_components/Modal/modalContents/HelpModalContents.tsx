import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import "./modalContents.css";

import { useTheme } from "@/app/_providers/lib";
import { ColorTheme } from "@/app/_types";

import { Button, ButtonColor } from "../../Button/Button";
import { BubbleIcon, XIcon } from "../../Icons/Icons";
import { TextIcon } from "../../Icons/TextIcon";

type HelpModalContentsProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function HelpModalContents({ setIsOpen }: HelpModalContentsProps) {
  const { theme } = useTheme();
  const color: Record<ColorTheme, ButtonColor> = {
    [ColorTheme.Bugs]: ButtonColor.Green,
    [ColorTheme.Fishes]: ButtonColor.LightBlue,
    [ColorTheme.DeepSeaCreatures]: ButtonColor.DarkBlue,
  };

  const butterfly = (
    <Image
      src="https://dodo.ac/np/images/3/38/Monarch_Butterfly_NH_Icon.png"
      width={60}
      height={60}
      alt="butterfly"
      loading="eager"
      style={{
        transform: "scale(1.1)",
      }}
    />
  );
  const sepiaButterfly = (
    <Image
      src="https://dodo.ac/np/images/3/38/Monarch_Butterfly_NH_Icon.png"
      width={60}
      height={60}
      alt="butterfly"
      loading="eager"
      style={{
        transform: "scale(1.1)",
        filter: "contrast(0) sepia(70%) brightness(1.3)",
      }}
    />
  );
  const darkSepiaButterfly = (
    <Image
      src="https://dodo.ac/np/images/3/38/Monarch_Butterfly_NH_Icon.png"
      width={60}
      height={60}
      alt="butterfly"
      loading="eager"
      style={{
        transform: "scale(1.1)",
        filter: "contrast(0) sepia(70%) brightness(1.1)",
      }}
    />
  );

  const earth = (
    <Image src="/earth.svg" width={40} height={40} alt="hemisphere switch" />
  );

  return (
    <div
      className="flex-container-col"
      style={{ justifyContent: "space-between", padding: "1em" }}
    >
      <h1 id="intro">
        Click a critter for more information or to register a catch
      </h1>
      <div className="flex-container-row" style={{ gap: "1em" }}>
        <div>
          <h2>Quick glance availability</h2>

          <div
            className="flex-container-col"
            style={{ gap: "0em", alignItems: "start", marginLeft: "1em" }}
          >
            <TextIcon icon={butterfly} text="Available right now" />
            <TextIcon icon={darkSepiaButterfly} text="Found this season" />
            <TextIcon icon={sepiaButterfly} text="Out of season" />
          </div>
        </div>
        <div className="flex-container-col" style={{ gap: "0.5em" }}>
          <div>
            <h2>Change hemisphere</h2>
            <TextIcon icon={earth} text="Click the world icon" />
          </div>
          <div>
            <h2>Change time settings</h2>
            <TextIcon icon={<BubbleIcon />} text="Click the bubble icon" />
          </div>
        </div>
      </div>
      <Button
        color={color[theme]}
        icon={<XIcon />}
        id="help-close"
        onClick={() => {
          setIsOpen(false);
        }}
        text="Close"
      />
    </div>
  );
}
