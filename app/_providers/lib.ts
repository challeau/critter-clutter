import { useContext } from "react";
import { HemisphereContext } from "./HemisphereProvider";
import { DateTimeContext } from "./DateTimeProvider";
import { ThemeContext } from "./ThemeProvider";

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
    throw new Error("useHemisphere must be used within HemisphereProvider");
  }

  return context;
}
