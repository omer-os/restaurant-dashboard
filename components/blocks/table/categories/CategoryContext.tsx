"use client";
import React, { createContext, useState, ReactNode } from "react";

interface CategoryContextProps {
  categories: {
    image: string;
    name: string;
    itemsNo: number;
    status: boolean | "auto";
    id: string;
  }[];
  setCategories: React.Dispatch<React.SetStateAction<any[]>>;
  selectedCategory: {
    image: string;
    name: string;
    itemsNo: number;
    status: boolean | "auto";
    id: string;
  } | null;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<{
      image: string;
      name: string;
      itemsNo: number;
      status: boolean | "auto";
      id: string;
    } | null>
  >;
  OpenUpdateModal: boolean; // Add the OpenUpdateModal state
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>; // Add the setOpenUpdateModal state updater
}

export const CategoriesContext = createContext<CategoryContextProps>({
  categories: [],
  setCategories: () => {},
  selectedCategory: null,
  setSelectedCategory: () => {},
  OpenUpdateModal: false,
  setOpenUpdateModal: () => {},
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<{
    image: string;
    name: string;
    itemsNo: number;
    status: boolean | "auto";
    id: string;
  } | null>(null);
  const [OpenUpdateModal, setOpenUpdateModal] = useState(false); // Initialize the OpenUpdateModal state with false

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        OpenUpdateModal,
        setOpenUpdateModal,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
