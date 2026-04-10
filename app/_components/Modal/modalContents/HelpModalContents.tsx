import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import "./modalContents.css";

import { useTheme } from "@/app/_lib";

import { Button, TextIcon, Icon, IconKinds } from "../../atoms";

type HelpModalContentsProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function HelpModalContents({ setIsOpen }: HelpModalContentsProps) {
  const { theme } = useTheme();

  const butterfly = (
    <Image
      src="/monarch.png"
      width={84}
      height={74}
      alt="butterfly"
      loading="eager"
    />
  );
  const InSeasonButterfly = (
    <Image
      src="/monarch-in-season.png"
      width={80}
      height={70}
      alt="butterfly"
      loading="eager"
    />
  );
  const OutSeasonButterfly = (
    <Image
      src="/monarch-out-season.png"
      width={80}
      height={70}
      alt="butterfly"
      loading="eager"
    />
  );

  return (
    <div
      className="flex-container-col"
      style={{ justifyContent: "space-between", padding: "4em" }}
    >
      <h1 id="intro">
        Click a critter for more information or to register a catch
      </h1>
      <div className="flex-container-row" style={{ gap: "5em" }}>
        <div>
          <h2>Quick glance availability</h2>

          <div
            className="flex-container-col"
            style={{ gap: "0em", alignItems: "start", marginLeft: "1em" }}
          >
            <TextIcon icon={butterfly} text="Available right now" />
            <TextIcon icon={InSeasonButterfly} text="Found this season" />
            <TextIcon icon={OutSeasonButterfly} text="Out of season" />
          </div>
        </div>
        <div className="flex-container-col" style={{ gap: "2em" }}>
          <div>
            <h2>Change hemisphere</h2>
            <TextIcon
              icon={<Icon kind={IconKinds.Earth} width="2em" />}
              text="Click the world icon"
            />
          </div>
          <div>
            <h2>Change time settings</h2>
            <TextIcon
              icon={<Icon kind={IconKinds.Bubble} width="2em" />}
              text="Click the bubble icon"
            />
          </div>
        </div>
      </div>
      <Button
        color={theme}
        icon={<Icon kind={IconKinds.X} />}
        id="help-close"
        onClick={() => {
          setIsOpen(false);
        }}
        text="Close"
      />
    </div>
  );
}
