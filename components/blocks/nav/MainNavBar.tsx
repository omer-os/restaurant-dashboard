"use client";
import React, { useContext } from "react";
import { ClientWrapperContext } from "../layout/ClinetLayoutWrapper";
import { FiMenu } from "react-icons/fi";
import Button from "@components/elements/button/Button";
import { IoMdClose } from "react-icons/io";

export default function MainNavBar() {
  const { openSideBar, setOpenSideBar } = useContext(ClientWrapperContext);

  return (
    <div className="border-b z-50 sticky top-0 left-0 md:py-4 py-3 px-4 flex bg-white justify-between items-center">
      <h1 className="font-bold">Restaurant</h1>

      <div className="rightSide">
        <Button
          padding={"sm"}
          bg={"white"}
          IconButton={true}
          onClick={() => setOpenSideBar(!openSideBar)}
          className="relative z-50"
        >
          {openSideBar ? <IoMdClose size={15} /> : <FiMenu size={15} />}
        </Button>
      </div>
    </div>
  );
}
