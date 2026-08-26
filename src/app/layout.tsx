import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Supreme Court of India",
    template: "%s | Supreme Court of India",
  },

  description:
    "A modern digital experience for accessing Supreme Court of India information, judgments, orders, notices, cases and services.",

  keywords: [
    "Supreme Court of India",
    "judgments",
    "orders",
    "case status",
    "cause list",
    "court notices",
    "legal resources",
  ],
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