"use client";
import React, { useContext } from "react";
import { ClientWrapperContext } from "../layout/ClinetLayoutWrapper";
import { FiMenu } from "react-icons/fi";
import Button from "@components/elements/button/Button";
import { IoMdClose } from "react-icons/io";
import { useSelectedLayoutSegments } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";

export default function MainNavBar() {
  const { openSideBar, setOpenSideBar } = useContext(ClientWrapperContext);
  const segments = useSelectedLayoutSegments();

  return (
    <div className="border-b z-50 sticky top-0 left-0 md:py-4 py-3 px-4 flex bg-white justify-between items-center">
      <h1 className="font-bold flex gap-2 items-center">
        {segments.length > 0 ? (
          segments.map((segment, index) => (
            <span
              className={`sm:flex hidden gap-2  items-center text-zinc-400 font-medium ${
                index === segments.length - 1 && "text-black !font-bold !flex"
              }`}
              key={index}
            >
              {segment}
              {index !== segments.length - 1 && (
                <AiOutlineRight size={15} className="text-zinc-600" />
              )}
            </span>
          ))
        ) : (
          <span className="flex gap-2 items-center font-bold">Dashboard</span>
        )}
      </h1>

      <div className="rightSide">
        <Button
          padding={"sm"}
          bg={"white"}
          IconButton={true}
          onClick={() => setOpenSideBar(!openSideBar)}
          className="relative z-50 md:hidden"
        >
          {openSideBar ? <IoMdClose size={15} /> : <FiMenu size={15} />}
        </Button>
      </div>
    </div>
  );
}
