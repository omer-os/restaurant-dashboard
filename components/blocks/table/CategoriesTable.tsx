"use client";

import { FiEdit2, FiSearch, FiTrash2 } from "react-icons/fi";
import TextInput from "@components/elements/input/TextInput";
import { useState } from "react";
import CategoryTableItem from "./CategoryTableItem";
const data = [
  {
    id: "1",
    name: "Pasta Carbonara",
    description: "Classic Italian pasta dish with creamy sauce and bacon",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/pasta-carbonara.jpg",
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with tomato, mozzarella, and basil",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/margherita-pizza.jpg",
  },
  {
    id: "3",
    name: "Chicken Tikka Masala",
    description:
      "Indian curry dish with grilled chicken in creamy tomato sauce",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/chicken-tikka-masala.jpg",
  },
  {
    id: "4",
    name: "Sushi Rolls",
    description: "Japanese dish with vinegared rice and various fillings",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/sushi-rolls.jpg",
  },
  {
    id: "5",
    name: "Caesar Salad",
    description:
      "Classic salad with romaine lettuce, croutons, and Caesar dressing",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/caesar-salad.jpg",
  },
  {
    id: "6",
    name: "Beef Burger",
    description: "Juicy beef patty with cheese, lettuce, and tomato in a bun",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/beef-burger.jpg",
  },
  {
    id: "7",
    name: "Pad Thai",
    description: "Thai stir-fried noodles with shrimp, tofu, peanuts, and lime",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/pad-thai.jpg",
  },
  {
    id: "8",
    name: "Fish and Chips",
    description: "British dish with battered fish and fried potato chips",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/fish-and-chips.jpg",
  },
  {
    id: "9",
    name: "Chicken Shawarma",
    description:
      "Middle Eastern wrap with grilled chicken, vegetables, and sauce",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/chicken-shawarma.jpg",
  },
  {
    id: "10",
    name: "Mushroom Risotto",
    description: "Creamy Italian rice dish with mushrooms and Parmesan cheese",
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "https://example.com/images/mushroom-risotto.jpg",
  },
];

export default function CategoriesTable() {
  const [Categories, setCategories] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = Categories.filter((item) => {
    // Adjust this depending on what properties you want to search by
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const tableHeadings = [
    "Name",
    "Description",
    "Created At",
    "Updated At",
    "Actions",
  ];

  return (
    <div className="overflow-x-auto overflow-y-scroll max-h-[70vh]">
      <div className="mb-3">
        <TextInput
          startIcon={<FiSearch />}
          State={searchTerm}
          setState={setSearchTerm}
          placeholder="Search for menus..."
          className="md:max-w-[300px]"
        />
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
          {filteredData.map((item) => (
            <CategoryTableItem
              key={item.id}
              item={item}
              setCategories={setCategories}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
