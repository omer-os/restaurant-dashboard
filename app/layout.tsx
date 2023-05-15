import { Metadata } from "next";
import "styles/globals.css";

import { Cairo } from "next/font/google";

const cairo = Cairo({
  variable: "--cairo",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "JoodLand Travel",
  description:
    "Book flights effortlessly. Find the best deals from top airlines and book your next flight with ease.",
  keywords: ["book flights", "travel", "flight tickets"],
  openGraph: {
    title: "JoodLand Travel",
    description:
      "Book flights effortlessly. Find the best deals from top airlines and book your next flight with ease.",
    images: ["/images/metadata_bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
