import { ColorScheme } from "@/app/_types";

import "./footer.css";

type FooterProps = {
  scheme: ColorScheme;
  children?: React.ReactNode[];
};

export function Footer({ scheme, children }: FooterProps) {
  return (
    <div id="footer" className={scheme}>
      <div id="foreground"></div>
      <div id="background"></div>
      {children}
    </div>
  );
}
