import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banana",
  description: "It's a banana",
  other: {
    "google-site-verification": "lQNOV82ldeQg5ASuxMAOMo5TLau5Pxg1YIcFS0i8LUs"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
