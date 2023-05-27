"use client";

import { FiPlus, FiSearch } from "react-icons/fi";
import TableRow from "./TableRow";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./CategoryContext";
import dynamic from "next/dynamic";

const CategoryModal = dynamic(
  () => import("@components/blocks/modal/CategoryModal")
);

const tableHeadings = ["Image", "Name", "Items", "Status", "Action"];
const categoryData = [
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category oner ourebno einp",
    itemsNo: 5,
    status: true,
    id: "1",
  },
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "Active",
    id: "2",
  },
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "Active",
    id: "3",
  },
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "Active",
    id: "4",
  },
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "Active",
    id: "5",
  },
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "Active",
    id: "6",
  },
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "Active",
    id: "7",
  },
  {
    image: "https://placehold.co/300x300",
    name: "Pasta Category",
    itemsNo: 5,
    status: "Active",
    id: "8",
  },
];
export default function CategoriesTable() {
  const {
    categories,
    setCategories,
    OpenUpdateModal,
    setOpenUpdateModal,
    selectedCategory,
  } = useContext(CategoriesContext);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  const [categoryName, setCategoryName] = useState<any>(selectedCategory?.name);
  const [categoryImage, setCategoryImage] = useState<any>(
    selectedCategory?.image
  );
  const [categoryStatus, setCategoryStatus] = useState(
    selectedCategory?.status
  );

  useEffect(() => {
    setCategoryName(selectedCategory?.name);
    setCategoryImage(selectedCategory?.image);
    setCategoryStatus(selectedCategory?.status);
  }, [selectedCategory]);

  const updateHandeler = () => {
    setTimeout(
      () => {
        setOpenUpdateModal(false);

        console.log(selectedCategory);

        setCategories(
          categories.map((category) =>
            category.id === selectedCategory?.id
              ? {
                  ...category,
                  name: categoryName,
                  image: categoryImage,
                  status: categoryStatus,
                }
              : category
          )
        );
      },

      1000
    );
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
        />{" "}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center">
        <FiPlus className="mr-2" />
        Add new category
      </button>
    </>
  );
}
