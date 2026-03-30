"use client";

import { ChildrenProps } from "../_types";
import { HemisphereProvider } from "./HemisphereProvider";
import { DateTimeProvider } from "./DateTimeProvider";

/**
 * Provides all data needed for display
 */
export function AppProviders({ children }: ChildrenProps) {
  return (
    <HemisphereProvider>
      <DateTimeProvider>{children}</DateTimeProvider>
    </HemisphereProvider>
  );
}
