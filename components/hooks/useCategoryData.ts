// useCategoryData.ts
import { CategoriesContext } from "@components/blocks/table/categories/CategoryContext";
import { Category } from "@lib/interfacses";
import { useContext, useEffect, useState } from "react";

export const useCategoryData = (categoryData: Category[]) => {
  const {
    categories,
    setCategories,
    OpenUpdateModal,
    setOpenUpdateModal,
    selectedCategory,
    setSelectedCategory,
  } = useContext(CategoriesContext);

  const [categoryName, setCategoryName] = useState<string>(
    selectedCategory?.name || ""
  );
  const [categoryImage, setCategoryImage] = useState<string>(
    selectedCategory?.image || ""
  );
  const [categoryStatus, setCategoryStatus] = useState<boolean | "auto">(
    selectedCategory?.status
  );
  const [activeDate, setActiveDate] = useState({
    startDate: selectedCategory?.activeDate?.startDate,
    endDate: selectedCategory?.activeDate?.endDate,
  });

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  useEffect(() => {
    setCategoryName(selectedCategory?.name || "");
    setCategoryImage(selectedCategory?.image || "");
    setCategoryStatus(selectedCategory?.status);
    setActiveDate({
      startDate: selectedCategory?.activeDate?.startDate || 1,
      endDate: selectedCategory?.activeDate?.endDate || 1,
    });
  }, [selectedCategory]);

  return {
    categories,
    setCategories,
    OpenUpdateModal,
    setOpenUpdateModal,
    selectedCategory,
    setSelectedCategory,
    categoryName,
    setCategoryName,
    categoryImage,
    setCategoryImage,
    categoryStatus,
    setCategoryStatus,
    activeDate,
    setActiveDate,
  };
};
