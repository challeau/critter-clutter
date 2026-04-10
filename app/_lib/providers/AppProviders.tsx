"use client";

import { ChildrenProps } from "../types";
import { DateTimeProvider } from "./DateTimeProvider";
import { FooterContentProvider } from "./FooterContentProvider";
import { HemisphereProvider } from "./HemisphereProvider";
import { ThemeProvider } from "./ThemeProvider";

/**
 * Provides all data needed for display
 */
export function AppProviders({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      <HemisphereProvider>
        <DateTimeProvider>
          <FooterContentProvider>{children}</FooterContentProvider>
        </DateTimeProvider>
      </HemisphereProvider>
    </ThemeProvider>
  );
}
