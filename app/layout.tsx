// ROOT LAYOUT for shared UI
"use client";
import { usePathname } from "next/navigation";

import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import { getColorSchemeFromPathname } from "./_utils";

import "./globals.css";
import "./variables.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const scheme = getColorSchemeFromPathname(pathname);

  return (
    <html lang="en">
      <body>
        <Navbar scheme={scheme} />
        {children}
        <Footer scheme={scheme} />
      </body>
    </html>
  );
}
