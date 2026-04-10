"use client";

import { createContext, SetStateAction, useState } from "react";

import { ChildrenProps } from "../types";

export type FooterContentContextType = {
  footerContent: React.ReactNode[];
  setFooterContent: (value: SetStateAction<React.ReactNode[]>) => void;
};

export const FooterContentContext =
  createContext<FooterContentContextType | null>(null);

/**
 * Provides and updates the theme according to the current url
 */
export function FooterContentProvider({ children }: ChildrenProps) {
  const [footerContent, setFooterContent] = useState<React.ReactNode[]>([]);

  return (
    <FooterContentContext.Provider
      value={{
        footerContent: footerContent,
        setFooterContent: setFooterContent,
      }}
    >
      {children}
    </FooterContentContext.Provider>
  );
}
