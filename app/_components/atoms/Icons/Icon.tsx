import "./icons.css";

import { ButterflyIcon, FishIcon, OctopusIcon } from "./Critters";
import {
  BubbleIcon,
  CheckmarkIcon,
  EarthIcon,
  HelpIcon,
  LogoIcon,
  XIcon,
} from "./UI";

export enum IconKinds {
  // Critters
  Butterfly,
  Fish,
  Octopus,
  // UI
  Help,
  CheckMark,
  X,
  Bubble,
  Earth,
  Logo,
}

const iconKindToSVG = {
  [IconKinds.Butterfly]: ButterflyIcon,
  [IconKinds.Fish]: FishIcon,
  [IconKinds.Octopus]: OctopusIcon,
  [IconKinds.Help]: HelpIcon,
  [IconKinds.CheckMark]: CheckmarkIcon,
  [IconKinds.X]: XIcon,
  [IconKinds.Bubble]: BubbleIcon,
  [IconKinds.Earth]: EarthIcon,
  [IconKinds.Logo]: LogoIcon,
};

type IconProps = {
  kind: IconKinds;
  id?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  isSelected?: boolean;
};

export function Icon(props: IconProps) {
  const { id, kind, height, width, isSelected, onClick } = props;

  const className = `flex-container-row icon ${isSelected ? "selected" : ""}`;
  const style = {
    height: height ?? "",
    width: width ?? "",
  };

  const icon = iconKindToSVG[kind];

  return (
    <div id={id} className={className} style={style} onClick={onClick}>
      {icon}
    </div>
  );
}
