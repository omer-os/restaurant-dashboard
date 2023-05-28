"use client";
import { Category } from "@lib/interfacses";
import React, { createContext, useState, ReactNode } from "react";

interface CategoryContextProps {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
  OpenUpdateModal: boolean; // Add the OpenUpdateModal state
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CategoriesContext = createContext<CategoryContextProps>({
  categories: [],
  setCategories: () => {},
  selectedCategory: {
    image: "",
    name: "",
    itemsNo: 0,
    status: false,
    id: "",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  },
  setSelectedCategory: () => {},
  OpenUpdateModal: false,
  setOpenUpdateModal: () => {},
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    image: "",
    name: "",
    itemsNo: 0,
    status: false,
    id: "",
    activeDate: {
      startDate: {
        day: 1,
        month: 1,
      },
      endDate: {
        day: 1,
        month: 1,
      },
    },
  });
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
