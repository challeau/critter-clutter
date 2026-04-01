"use client";

import { AppProviders } from "./_providers/AppProviders";
import { ChildrenProps } from "./_types";
import { Footer, Navbar } from "./_components";

export default function ClientLayout({ children }: ChildrenProps) {
  return (
    <AppProviders>
      <Navbar />
      {children}
      <Footer />
    </AppProviders>
  );
}
