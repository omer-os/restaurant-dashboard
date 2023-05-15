import Avatar from "@components/elements/avatar/Avatar";
import Divider from "@components/elements/divider/Divider";
import { ListItem } from "@components/elements/list/ListItem";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

export default function SideBar({
  isSidebarOpen,
  toggleSidebar,
  pathname,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  pathname: string;
}) {
  return (
    <>
      <div
        className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        aria-hidden="true"
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 overflow-auto transition-all transform duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="bg-white h-full flex flex-col p-4">
          {/* Content for Sidebar */}

          <div className="flex flex-col items-center text-center">
            <Avatar
              size={"xl"}
              alt="s"
              src="https://avatars.githubusercontent.com/u/66512898?s=16&v=4"
            />

            <div className="text-xl mt-2 font-bold">Lorem ipsum</div>
            <div className="text-zinc-400 line-clamp-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, animi voluptate? Nesciunt officia, quod fugit nam
              consectetur dolor molestiae quis minus sunt sint est expedita
              reprehenderit suscipit voluptates molestias obcaecati!
            </div>
          </div>

          <div className="my-4">
            <Divider />
          </div>

          <ul className="flex flex-col gap-2">
            {[
              {
                name: "Home",
                icon: <FaHome />,
                link: "/",
              },
              {
                name: "menu",
                icon: <CgMenuGridR />,
                link: "/menu",
              },
            ].map((item, index) => (
              <Link href={item.link} key={index} onClick={toggleSidebar}>
                <ListItem
                  starticon={item.icon}
                  intent={pathname === item.link ? "primary" : "ghost"}
                >
                  {item.name}
                </ListItem>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
