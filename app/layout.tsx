import { Metadata } from "next";
import "styles/globals.css";
import { Cairo } from "next/font/google";
import MainLayout from "@components/pages/layouts/MainLayout";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

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
    <ClerkProvider>
      <html lang="en">
        <body className={cairo.className}>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
