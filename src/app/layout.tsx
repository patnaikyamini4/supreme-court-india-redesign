import type { Metadata } from "next";
import "./globals.css";

import CourtHeader from "@/components/layout/CourtHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Supreme Court of India",
    template: "%s | Supreme Court of India",
  },
  description:
    "A modern frontend redesign of the Supreme Court of India website for improved navigation, accessibility, discoverability and responsive experience.",
  keywords: [
    "Supreme Court of India",
    "Supreme Court",
    "Judgments",
    "Case Status",
    "Daily Orders",
    "Cause List",
    "Notices",
    "e-Services",
  ],
  authors: [
    {
      name: "Supreme Court of India Redesign",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CourtHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}