import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { Metadata } from "next";
import "styles/globals.css";
import { Cairo } from "next/font/google";
import ServerLayoutWrapper from "@components/blocks/layout/ServerLayoutWrapper";
import ClinetLayoutWrapper from "@components/blocks/layout/ClinetLayoutWrapper";

const cairo = Cairo({
  variable: "--cairo",
  style: "normal",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Restaurant Dashboard",
  description: "Restaurant Dashboard - Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cairo.className + " bg-zinc-200"}>
          <ClinetLayoutWrapper>
            <ServerLayoutWrapper>{children}</ServerLayoutWrapper>
          </ClinetLayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
