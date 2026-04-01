import "./footer.css";

import { useTheme } from "@/app/_providers/lib";

type FooterProps = {
  children?: React.ReactNode[];
};

export function Footer({ children }: FooterProps) {
  const { theme } = useTheme();

  return (
    <div id="footer" className={theme}>
      <div id="foreground"></div>
      <div id="background"></div>
      {children}
    </div>
  );
}
