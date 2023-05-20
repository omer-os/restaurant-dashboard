"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiCategory, BiFoodMenu } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { FiLogOut } from "react-icons/fi";

export default function SideBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const auth = useAuth();
  const [ShowProfile, setShowProfile] = useState(false);
  const closeSideBar = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();
  return (
    <>
      {isOpen && (
        <div
          onClick={closeSideBar}
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
        />
      )}
      <nav
        className={`transform top-0 left-0 w-64 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50 bg-white flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 p-5`}
      >
        <div className="flex flex-col w-full bg-white">
          <div className="text-3xl font-bold mb-2">The Restaurant</div>
          <hr className="border-t border-gray-300" />

          <div className="flex flex-col space-y-1 mt-5">
            {[
              {
                name: "home",
                icon: <AiFillHome />,
                link: "/",
              },
              {
                name: "categories",
                icon: <BiCategory />,
                link: "/categories",
              },
              {
                name: "menu items",
                icon: <BiFoodMenu />,
                link: "/menus",
              },
            ].map((item, index) => (
              <Link
                className={`flex gap-2 hover:bg-zinc-200 p-3 rounded items-center transition-all ${
                  pathname === item.link
                    ? "text-blue-500 font-bold bg-zinc-200"
                    : "text-gray-600"
                }`}
                href={item.link}
                key={index}
                onClick={closeSideBar}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            ))}

            <hr />

            <button
              className="logout transition-all text-gray-600 mt-2 text-left hover:bg-zinc-200 p-3 rounded flex gap-2 items-center"
              onClick={() => auth.signOut()}
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
