"use client";

import React, { createContext, useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { firebaseConfig } from "@lib/firebase-config";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

export const ClientWrapperContext = createContext<{
  openSideBar: boolean;
  setOpenSideBar: any;
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

  const { getToken } = useAuth();

  useEffect(() => {
    const signInWithClerk = async () => {
      const auth = getAuth();
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(
        auth,
        token as string
      );

      console.log("user ::", userCredentials.user);
    };

    signInWithClerk();
  }, []);

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
