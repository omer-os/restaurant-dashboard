"use client";
import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Price } from "../dialog/PricesTable";

type MenuItemProps = {
  item: {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    image: string;
    prices: Price[];
  };
  onEdit: () => void;
  onDelete: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ item, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-sm h-10 w-12 object-cover"
        />
      </td>

      <td className="px-6 py-4 whitespace-nowrap truncate min-w-[5em] max-w-[7em]">
        {item.name}
      </td>

      <td className="px-6 py-4 max-w-[5em] truncate whitespace-nowrap">
        {item.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {item.createdAt.toLocaleDateString()}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-start">
        <button
          className="text-blue-600 hover:text-blue-900 mr-2 hover:bg-blue-200 rounded-full p-2 hover:ring-1 ring-blue-600"
          onClick={onEdit}
        >
          <FiEdit2 />
        </button>
        <button
          className="text-red-600 hover:text-red-900 hover:bg-red-200 rounded-full p-2 hover:ring-1 ring-red-600"
          onClick={onDelete}
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
};

export default MenuItem;
