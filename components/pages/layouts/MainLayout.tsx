"use client";
import MainNav from "@components/templates/nav/MainNav";
import SideBar from "@components/templates/sidebar/SideBar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-datasheet-grid/dist/style.css";
import { useAuth } from "@clerk/nextjs";
import app from "@lib/firebase";
import { getAuth, signInWithCustomToken } from "firebase/auth";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const { getToken } = useAuth();

  useEffect(() => {
    const sginInWithClerck = async () => {
      const auth = getAuth(app);
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(auth, token as string);

      // const { uid, displayName, email, photoURL, phoneNumber } =
      //   userCredentials.user;

      /**
       * The userCredentials.user object will call the methods of
       * the Firebase platform as an authenticated user.
       */
      // console.log("user ::", userCredentials.user);
    };

    sginInWithClerck();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar
        pathname={pathname}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex flex-col w-full">
        <MainNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
