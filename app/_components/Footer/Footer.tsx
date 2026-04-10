import "./footer.css";

import { ChildrenProps, useTheme } from "@/app/_lib";

export function Footer({ children }: ChildrenProps) {
  const { theme } = useTheme();

  return (
    <div id="footer" className={theme}>
      <div id="foreground"></div>
      <div id="background"></div>
      <div id="content">{children}</div>
    </div>
  );
}
