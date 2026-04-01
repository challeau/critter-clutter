"use client";

import { ChildrenProps } from "../_types";
import { HemisphereProvider } from "./HemisphereProvider";
import { DateTimeProvider } from "./DateTimeProvider";
import { ThemeProvider } from "./ThemeProvider";

/**
 * Provides all data needed for display
 */
export function AppProviders({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      <HemisphereProvider>
        <DateTimeProvider>{children}</DateTimeProvider>
      </HemisphereProvider>
    </ThemeProvider>
  );
}
