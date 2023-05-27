"use client";

import React, { createContext, useState } from "react";

export const ClientWrapperContext = createContext<{
  openSideBar: boolean;
  setOpenSideBar: any
}>({
  openSideBar: false,
  setOpenSideBar: () => {},
});

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <ClientWrapperContext.Provider
      value={{
        openSideBar: openSideBar,
        setOpenSideBar: setOpenSideBar,
      }}
    >
      {children}
    </ClientWrapperContext.Provider>
  );
}
