import { useContext } from "react";
import { HemisphereContext } from "./HemisphereProvider";
import { DateTimeContext } from "./DateTimeProvider";
import { ThemeContext } from "./ThemeProvider";
import { FooterContentContext } from "./FooterContentProvider";

/**
 * Returns hemisphere value from context
 */
export function useHemisphere() {
  const context = useContext(HemisphereContext);

  if (!context) {
    throw new Error("useHemisphere must be used within HemisphereProvider");
  }

  return context;
}

/**
 * Returns date/time value from context
 */
export function useDateTime() {
  const context = useContext(DateTimeContext);

  if (!context) {
    throw new Error("useDateTime must be used within DateTimeProvider");
  }

  return context;
}

/**
 * Returns color theme value from context
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

/**
 * Returns content for the footer from context (so pages can update it)
 */
export function useFooterContent() {
  const context = useContext(FooterContentContext);

  if (!context) {
    throw new Error(
      "useFooterContent must be used within FooterContentProvider",
    );
  }

  return context;
}
