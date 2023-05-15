"use client";
import MainNav from "@components/templates/nav/MainNav";
import SideBar from "@components/templates/sidebar/SideBar";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import "react-datasheet-grid/dist/style.css";

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
