"use client";

import { Navbar, Footer } from "./_components";
import { ChildrenProps, useFooterContent } from "./_lib";

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
