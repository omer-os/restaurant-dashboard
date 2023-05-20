"use client";
import { useState } from "react";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [error, setError] = useState(null);
  const [sidebaseOpen, setSidebaseOpen] = useState(false);
  return (
    <div>
      <div className="h-screen flex">
        <SideBar isOpen={sidebaseOpen} setIsOpen={setSidebaseOpen} />

        <main className="flex-1 min-w-0 overflow-auto flex flex-col">
          <TopNav
            sidebaseOpen={sidebaseOpen}
            setSidebaseOpen={setSidebaseOpen}
          />
          <div className="p-5">{children}</div>
        </main>
      </div>
    </div>
  );
}
