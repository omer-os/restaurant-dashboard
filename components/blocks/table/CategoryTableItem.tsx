"use client";
import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { FcViewDetails } from "react-icons/fc";
import Link from "next/link";

export default function CategoryTableItem({
  item,
  setCategories,
  onEdit,
  onDelete,
  setCurrentCategory,
  setOpenDeleteDialog,
}: {
  item: {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    image: string;
  };
  setCategories: any;
  onEdit: any;
  onDelete: any;

  setCurrentCategory: any;
  setOpenDeleteDialog: any;
}) {
  const [categoryName, setCategoryName] = useState(item.name);
  const [categoryDescription, setCategoryDescription] = useState(
    item.description
  );
  const [categoryImage, setCategoryImage] = useState(item.image);

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
      <td className="px-6 py-4 whitespace-nowrap">
        {item.updatedAt.toLocaleDateString()}
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

        <Link
          href={`/menu/${item.id}`}
          className="text-blue-600 hover:text-blue-900 mr-2 hover:bg-blue-200 rounded-full p-2 hover:ring-1 ring-blue-600"
        >
          <FcViewDetails />
        </Link>
      </td>

      {/* Modal */}
    </tr>
  );
}
