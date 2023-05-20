"use client";
import { FaSquarespace } from "react-icons/fa";
import { BsMenuDown, BsBorderStyle } from "react-icons/bs";
import LinkButton from "@components/elements/link/Link";
import { usePathname } from "next/navigation";
import { ClientWrapperContext } from "../layout/ClinetLayoutWrapper";
import { useContext } from "react";

export default function MainSideBar() {
  const pathname = usePathname();
  const { openSideBar, setOpenSideBar } = useContext(ClientWrapperContext);
  return (
    <div
      className={`flex-none p-4 bg-white  border-r flex flex-col
    transition-all

    h-full
    md:!left-0
    md:w-60
    w-full
    md:relative fixed z-40
    md:!pt-0 pt-16
    ${openSideBar ? "left-0" : "-left-full"}
    `}
    >
      <div className="logo py-2 flex items-center gap-2">
        <div className="w-10 h-10">
          <img
            src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
            alt="logo"
          />
        </div>
        <p className="font-bold text-lg">Restaurant Name</p>
      </div>

      <div className="flex mt-3 gap-1 flex-col">
        {[
          {
            name: "Dashboard",
            icon: <FaSquarespace />,
            link: "/",
          },
          {
            name: "Menu",
            icon: <BsMenuDown />,
            link: "/menu",
          },
          {
            name: "Orders",
            icon: <BsBorderStyle />,
            link: "/orders",
          },
        ].map((item, index) => (
          <LinkButton
            onClick={() => setOpenSideBar(false)}
            width={"full"}
            key={index}
            href={item.link}
            startIcon={item.icon}
            bg={pathname === item.link ? "primary" : "zinc"}
          >
            {item.name}
          </LinkButton>
        ))}
      </div>
    </div>
  );
}
