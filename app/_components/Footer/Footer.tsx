import { ChildrenProps } from "@/app/_types";
import "./footer.css";

import { useTheme } from "@/app/_providers/lib";

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
