"use client";

import { createContext, useEffect, useState } from "react";

import { ChildrenProps } from "../types";

export type DateTimeContextType = {
  month: number;
  hours: number;
};

export const DateTimeContext = createContext<DateTimeContextType | null>(null);

/**
 * Provides and updates the date/time settings for display purposes
 * Defaults to current date/time, unless Time Travel is enabled
 */
export function DateTimeProvider({ children }: ChildrenProps) {
  const [value, setValue] = useState<DateTimeContextType | null>(null);

  // prevent errors when SSRing. this will NOT re-render.
  useEffect(() => {
    const now = new Date();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue({ month: now.getMonth() + 1, hours: now.getHours() });
  }, []);

  if (!value) return null; // or a loading fallback

  return (
    <DateTimeContext.Provider value={value}>
      {children}
    </DateTimeContext.Provider>
  );
}
