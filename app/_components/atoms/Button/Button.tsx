import "./button.css";

import { ColorTheme } from "@/app/_lib";

import { ButtonBlob } from "../Blobs";

export enum ButtonType {
  Solid = "solid",
  Hoverable = "hoverable",
  Date = "date",
  Time = "time",
}

export enum ButtonColor {
  Beige = "beige",
  Green = "green",
  LightBlue = "light-blue",
  DarkBlue = "dark-blue",
  White = "white",
  TransparentWhite = "tspt-white",
}

type ButtonProps = {
  color: ButtonColor | ColorTheme;
  icon?: React.ReactNode;
  id?: string;
  onClick: () => void;
  text: string;
  type?: ButtonType;
  className?: string;
};

export function Button(props: ButtonProps) {
  const {
    color,
    icon,
    id = "",
    onClick,
    text,
    type = ButtonType.Solid,
    className = "",
  } = props;
  const btnClassName = `flex-container-row button ${color} ${type} ${className}`;

  return (
    <div className={btnClassName} id={id} onClick={onClick}>
      <ButtonBlob className="button-bg" />
      {icon}
      <span className="button-text">{text}</span>
    </div>
  );
}
