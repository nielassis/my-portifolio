import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portifólio | Daniel Assis",
  description: "Portifólio de Daniel Assis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
