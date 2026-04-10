import "./tooltip.css";

import { ColorTheme } from "@/app/_lib";

import { Button } from "../Button/Button";

type TooltipProps = {
  element: React.ReactNode;
  tooltipText: string;
  theme: ColorTheme;
};

export function Tooltip({ element, tooltipText, theme }: TooltipProps) {
  const tooltip = (
    <Button
      className="tooltip-text"
      color={theme}
      text={tooltipText}
      onClick={() => {}}
    />
  );
  return (
    <div className="tooltip flex-container-row">
      {tooltip}
      {element}
    </div>
  );
}
