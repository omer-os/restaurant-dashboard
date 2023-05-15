import { Metadata } from "next";
import "styles/globals.css";

import { Cairo } from "next/font/google";
import BottomNav from "@components/templates/bottomNav/BottomNav";
import { FaAddressBook, FaHome, FaSearch } from "react-icons/fa";
import MainLayout from "@components/pages/layouts/MainLayout";

const cairo = Cairo({
  variable: "--cairo",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Restaurant Dashboard",
  description: "Restaurant Dashboard - Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
