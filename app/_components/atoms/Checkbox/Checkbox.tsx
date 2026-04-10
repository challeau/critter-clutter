import { Dispatch, SetStateAction } from "react";

import "./checkbox.css";

import { ColorTheme } from "@/app/_lib";

import { Icon, IconKinds } from "../Icons";

type CheckboxProps = {
  color: ColorTheme;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  text: string;
};

export function Checkbox(props: CheckboxProps) {
  const { color, isChecked, setIsChecked, text } = props;
  const className = `checkbox flex-container-row ${color}${isChecked ? " checked" : ""}`;

  const checkedIcon = <Icon kind={IconKinds.CheckMark} />;

  return (
    <div className={className}>
      <div className="box" onClick={() => setIsChecked(!isChecked)}>
        <div className="checkmark">{isChecked && checkedIcon}</div>
      </div>
      <span>{text}</span>
    </div>
  );
}
