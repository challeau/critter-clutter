"use client";

import { ChildrenProps } from "./_types";
import { Footer, Navbar } from "./_components";
import { useFooterContent } from "./_providers/lib";

export default function ClientLayout({ children }: ChildrenProps) {
  const { footerContent } = useFooterContent();

  return (
    <>
      <Navbar />
      {children}
      <Footer>{footerContent}</Footer>
    </>
  );
}
