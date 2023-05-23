"use client";

import { FiSearch } from "react-icons/fi";
import TextInput from "@components/elements/input/TextInput";
import { useState } from "react";
import CategoryTableItem from "./CategoryTableItem";
import CategoryModal from "../modal/CategoryModal";
import DeleteDialog from "../dialog/DeleteDialog";
import DropDown from "@components/elements/dropdown/DropDown";

const data = [
  {
    id: "1",
    name: "Pasta Carbonara",
    description: "Classic Italian pasta dish with creamy sauce and bacon",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with tomato, mozzarella, and basil",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "3",
    name: "Chicken Tikka Masala",
    description:
      "Indian curry dish with grilled chicken in creamy tomato sauce",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "4",
    name: "Sushi Rolls",
    description: "Japanese dish with vinegared rice and various fillings",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "5",
    name: "Caesar Salad",
    description:
      "Classic salad with romaine lettuce, croutons, and Caesar dressing",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "6",
    name: "Beef Burger",
    description: "Juicy beef patty with cheese, lettuce, and tomato in a bun",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "7",
    name: "Pad Thai",
    description: "Thai stir-fried noodles with shrimp, tofu, peanuts, and lime",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "8",
    name: "Fish and Chips",
    description: "British dish with battered fish and fried potato chips",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "9",
    name: "Chicken Shawarma",
    description:
      "Middle Eastern wrap with grilled chicken, vegetables, and sauce",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
  {
    id: "10",
    name: "Mushroom Risotto",
    description: "Creamy Italian rice dish with mushrooms and Parmesan cheese",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://placehold.co/300x300",
  },
];

export default function CategoriesTable() {
  const [Categories, setCategories] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const [OpenModal, setOpenModal] = useState(false);
  const [OpenDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<
    (typeof Categories)[number] | null
  >(null);

  const filteredData = Categories.filter((item) => {
    // Adjust this depending on what properties you want to search by
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const tableHeadings = [
    "Image",
    "Name",
    "Description",
    "Created At",
    "Updated At",
    "Actions",
  ];

  const handleDelete = () => {
    if (currentCategory) {
      setCategories((prev) =>
        prev.filter((item) => item.id !== currentCategory.id)
      );
    }
  };

  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  const [FilteredBy, setFilteredBy] = useState<
    null | "name" | "description" | "price"
  >(null);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="overflow-x-auto overflow-y-scroll max-h-[70vh]">
      <div className="sticky left-0 flex gap-3">
        <div>
          <div className="text-3xl font-bold">All Categories</div>

          <div className="mb-3 mt-6">
            <TextInput
              startIcon={<FiSearch />}
              State={searchTerm}
              setState={setSearchTerm}
              placeholder="Search for menus..."
              className="md:max-w-[300px]"
            />
          </div>
        </div>
      </div>

      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 sticky top-0 left-0">
          <tr>
            {tableHeadings.map((heading, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData.map((item, index) => (
            <CategoryTableItem
              setCurrentCategory={setCurrentCategory}
              setOpenDeleteDialog={setOpenDeleteDialog}
              key={item.id + index}
              item={item}
              setCategories={setCategories}
              onEdit={() => {
                setCurrentCategory(item);
                setCategoryName(item.name);
                setCategoryDescription(item.description);
                setCategoryImage(item.image);
                setOpenModal(true);
              }}
              onDelete={() => {
                setCurrentCategory(item);
                setOpenDeleteDialog(true);
              }}
            />
          ))}
        </tbody>
      </table>
      <CategoryModal
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        categoryDescription={categoryDescription}
        setCategoryDescription={setCategoryDescription}
        categoryImage={categoryImage}
        setCategoryImage={setCategoryImage}
        onSave={() => {
          if (currentCategory) {
            setCategories((prev) =>
              prev.map((item) =>
                item.id === currentCategory.id
                  ? {
                      ...item,
                      name: categoryName,
                      description: categoryDescription,
                      image: categoryImage,
                    }
                  : item
              )
            );
          } else {
            setCategories((prev) => [
              ...prev,
              {
                id: Math.random().toString(),
                name: categoryName,
                description: categoryDescription,
                image: categoryImage,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ]);
          }
        }}
        open={OpenModal}
        setOpen={(isOpen) => {
          if (!isOpen) {
            setCurrentCategory(null);
          }
          setOpenModal(isOpen);
        }}
      />

      <DeleteDialog
        description="Are you sure you want to delete this category?"
        onDelete={handleDelete}
        open={OpenDeleteDialog}
        setOpen={(isOpen: boolean) => {
          if (!isOpen) setCurrentCategory(null);
          setOpenDeleteDialog(isOpen);
        }}
        title={`Delete ${currentCategory ? currentCategory.name : ""}`}
      />
    </div>
  );
}
