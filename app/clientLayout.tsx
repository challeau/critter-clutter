"use client";

import { usePathname } from "next/navigation";

import { AppProviders } from "./_providers/AppProviders";
import { getColorSchemeFromPathname } from "./_utils";
import { ChildrenProps } from "./_types";
import { Footer, Navbar } from "./_components";

export default function ClientLayout({ children }: ChildrenProps) {
  const pathname = usePathname();
  const scheme = getColorSchemeFromPathname(pathname);

  return (
    <AppProviders>
      <Navbar scheme={scheme} />
      {children}
      <Footer scheme={scheme} />
    </AppProviders>
  );
}
