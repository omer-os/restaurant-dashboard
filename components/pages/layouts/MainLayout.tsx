"use client";
import MainNav from "@components/templates/nav/MainNav";
import SideBar from "@components/templates/sidebar/SideBar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-datasheet-grid/dist/style.css";
import { useAuth } from "@clerk/nextjs";
import app from "@lib/firebase";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getRestaurantByOwnerId } from "@lib/firebaseFunctions/getResturant";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const { getToken } = useAuth();

  useEffect(() => {
    const sginInWithClerck = async () => {
      const auth = getAuth(app);
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(
        auth,
        token as string
      );
    };

    sginInWithClerck();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar
        pathname={pathname}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex flex-col w-full">
        <MainNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <RestaurantProvider>
          <main className="flex-grow p-6">{children}</main>
        </RestaurantProvider>
      </div>
    </div>
  );
}

export const RestaurantContext = React.createContext<{
  restarant: Restaurant;
  setRestaurant: any;
}>({
  restarant: {} as Restaurant,
  setRestaurant: () => {},
});

const RestaurantProvider = ({ children }: { children: React.ReactNode }) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const user = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      const restaurant = await getRestaurantByOwnerId(user.userId as string);
    };

    fetchData();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restarant: restaurant as Restaurant,
        setRestaurant: setRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
