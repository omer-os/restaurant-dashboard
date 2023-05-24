import React from "react";
import MainSideBar from "../sidebar/MainSideBar";
import MainNavBar from "../nav/MainNavBar";

export default function ServerLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"h-screen flex"}>
      <MainSideBar />
      <div className="flex-1 min-w-0 ">
        <MainNavBar />
        <div className="">{children}</div>
      </div>
    </div>
  );
}
