"use client";

import { FiPlus, FiSearch } from "react-icons/fi";
import TableRow from "./TableRow";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./CategoryContext";
import dynamic from "next/dynamic";
import { Category } from "@lib/interfacses";
import { useCategoryData } from "@components/hooks/useCategoryData";

const CategoryModal = dynamic(
  () => import("@components/blocks/modal/CategoryModal")
);

const tableHeadings = ["Image", "Name", "Items", "Status", "Actions"];
const categoryData: Category[] = [
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category oner ourebno einp",
    itemsNo: 5,
    status: true,
    id: "1",
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
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: true,
    id: "2",
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
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: false,
    id: "3",
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
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: false,
    id: "4",
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
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: true,
    id: "5",
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
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "auto",
    id: "6",
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
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: true,
    id: "7",
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
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: true,
    id: "8",
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
];
export default function CategoriesTable() {
  const {
    categories,
    setCategories,
    OpenUpdateModal,
    setOpenUpdateModal,
    selectedCategory,
    categoryName,
    setCategoryName,
    categoryImage,
    setCategoryImage,
    categoryStatus,
    setCategoryStatus,
    activeDate,
    setActiveDate,
  } = useCategoryData(categoryData);

  const updateHandeler = () => {
    setTimeout(() => {
      const updatedCategories = categories.map((category) =>
        category.id === selectedCategory?.id
          ? {
              ...category,
              name: categoryName,
              image: categoryImage,
              status: categoryStatus,
              activeDate: {
                startDate: activeDate.startDate,
                endDate: activeDate.endDate,
              },
            }
          : category
      );
      setCategories(updatedCategories);
      setOpenUpdateModal(false);
    }, 1000);
  };

  const addCategoryHandler = () => {
    const newCategoryId = Date.now().toString(); // Using timestamp as a temporary unique ID
    const newCategory = {
      image: "https://placehold.co/300x300",
      name: "New Category",
      itemsNo: 0,
      status: true,
      id: newCategoryId,
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
    };
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div className="overflow-x-auto overflow-y-scroll max-h-[75vh]">
        <div className="sticky left-0 flex gap-3 w-full md:w-max">
          <div className="w-full flex flex-col">
            <div className="text-3xl font-bold">All Categories</div>
            <div className="mb-3 mt-4">
              <div className="flex relative">
                <FiSearch className="text-gray-500 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Search for menus..."
                  className="px-4 border w-full border-gray-300 rounded py-2 pl-8"
                />
              </div>
            </div>
          </div>
        </div>
        <table className="w-full min-w-max divide-y divide-gray-200">
          <thead className="bg-gray-200 sticky top-0 left-0">
            <tr>
              {tableHeadings.map((heading, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category, index) => (
              <TableRow key={category.name + index} category={category} />
            ))}
          </tbody>
        </table>
        <CategoryModal
          categoryName={categoryName || ""}
          setCategoryName={setCategoryName}
          categoryImage={categoryImage}
          setCategoryImage={setCategoryImage}
          open={OpenUpdateModal}
          setOpen={setOpenUpdateModal}
          onSave={updateHandeler}
          categoryStatus={categoryStatus === undefined ? true : categoryStatus}
          setCategoryStatus={setCategoryStatus}
          activeDate={
            activeDate || {
              startDate: {
                day: 1,
                month: 1,
              },
              endDate: {
                day: 1,
                month: 1,
              },
            }
          }
          setActiveDate={setActiveDate}
        />{" "}
      </div>
      <button
        onClick={addCategoryHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center"
      >
        <FiPlus className="mr-2" />
        Add new category
      </button>
    </>
  );
}
