"use client";
import { MenuItem } from "@lib/interfacses";
import React, { createContext, useState } from "react";

interface MenuItemContextProps {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  selectedMenuItem: MenuItem;
  setSelectedMenuItem: React.Dispatch<React.SetStateAction<MenuItem>>;
  OpenUpdateModal: boolean;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuitemContext = createContext<MenuItemContextProps>({
  menuItems: [],
  setMenuItems: () => {},
  selectedMenuItem: {
    id: "",
    name: "",
    description: "",
    image_url: "",
    basePrice: 0,
    variants: [],
    extras: [],
    status: "basedOnCategory",
    activeDate: {
      startDate: { month: 1, day: 1 },
      endDate: { month: 1, day: 1 },
    },
  },
  setSelectedMenuItem: () => {},
  OpenUpdateModal: false,
  setOpenUpdateModal: () => {},
});

export const MenuItemProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>({
    id: "",
    name: "",
    description: "",
    image_url: "",
    basePrice: 0,
    variants: [],
    extras: [],
    status: "basedOnCategory",
    activeDate: {
      startDate: { month: 1, day: 1 },
      endDate: { month: 1, day: 1 },
    },
  });
  const [OpenUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  return (
    <MenuitemContext.Provider
      value={{
        menuItems,
        setMenuItems,
        selectedMenuItem,
        setSelectedMenuItem,
        OpenUpdateModal,
        setOpenUpdateModal,
      }}
    >
      {children}
    </MenuitemContext.Provider>
  );
};
