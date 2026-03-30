"use client";

import { createContext, useEffect, useMemo, useState } from "react";

import { ChildrenProps, HemisphereType } from "../_types";

export type HemisphereContextType = {
  hemisphere: HemisphereType;
  toggleHemisphere: () => void;
};

export const HemisphereContext = createContext<HemisphereContextType | null>(
  null,
);

/**
 * Provides and updates the hemisphere setting for display purposes
 */
export function HemisphereProvider({ children }: ChildrenProps) {
  const [hemisphere, setHemisphere] = useState<HemisphereType>("N");

  // prevent errors when SSRing. this will NOT re-render.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHemisphere(
      (localStorage.getItem("hemisphere") as HemisphereType) ?? "N",
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("hemisphere", hemisphere);
  }, [hemisphere]);

  const toggleHemisphere = () => {
    setHemisphere((prev: HemisphereType) => (prev === "N" ? "S" : "N"));
  };

  const value = useMemo(() => ({ hemisphere, toggleHemisphere }), [hemisphere]);

  return (
    <HemisphereContext.Provider value={value}>
      {children}
    </HemisphereContext.Provider>
  );
}
