"use client";

import { usePathname } from "next/navigation";
import { createContext } from "react";

import { ChildrenProps, ColorTheme } from "../types";
import { getColorThemeFromPathname } from "../utils";

export type ThemeContextType = {
  theme: ColorTheme;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * Provides and updates the theme according to the current url
 */
export function ThemeProvider({ children }: ChildrenProps) {
  const pathname = usePathname();
  const theme = getColorThemeFromPathname(pathname);

  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
