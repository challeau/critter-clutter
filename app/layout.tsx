// ROOT LAYOUT for shared UI
import { AppProviders } from "./_lib";
import ClientLayout from "./clientLayout";

import "./globals.css";
import "./variables.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <ClientLayout>{children}</ClientLayout>
        </AppProviders>
      </body>
    </html>
  );
}
