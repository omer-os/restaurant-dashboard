"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function TopNav({
  sidebaseOpen,
  setSidebaseOpen,
}: {
  sidebaseOpen: boolean;
  setSidebaseOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [scrolled, setScrolled] = useState(false);
  const toggleSideBar = () => {
    setSidebaseOpen(!sidebaseOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 w-full p-4 z-30 flex items-center justify-between bg-white transition-all ease-in-out 
      `}
    >
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-semibold">
          <Link href="/">Company Name</Link>
        </h1>
      </div>
      <div className="flex gap-3 items-center">
        <button
          onClick={toggleSideBar}
          className="flex lg:hidden hover:bg-zinc-200 rounded p-2"
        >
          {sidebaseOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        <UserButton />
      </div>
    </div>
  );
}
