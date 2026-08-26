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
    "A modern frontend redesign of the Supreme Court of India website with improved navigation, discoverability, accessibility and responsive design.",

  keywords: [
    "Supreme Court of India",
    "Supreme Court",
    "Judgments",
    "Case Status",
    "Daily Orders",
    "Cause List",
    "Notices",
    "Court Services",
  ],

  applicationName: "Supreme Court of India",

  authors: [
    {
      name: "Supreme Court of India Redesign",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
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
        <a
          href="#main-content"
          className="sc-skip-link"
        >
          Skip to main content
        </a>

        <CourtHeader />

        <main id="main-content">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}