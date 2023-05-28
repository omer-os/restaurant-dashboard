"use client";

import DeleteDialog from "@components/blocks/dialog/DeleteDialog";
import { useContext, useState } from "react";
import { CategoriesContext } from "./CategoryContext";
import Link from "next/link";
import { Category } from "@lib/interfacses";

export default function TableActions({ category }: { category: Category }) {
  const { categories, setCategories, setSelectedCategory, setOpenUpdateModal } =
    useContext(CategoriesContext);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDelete = () => {
    setCategories(categories.filter((cat) => cat.id !== category.id));
    setOpenDeleteModal(false);
  };

  return (
    <>
      <td className="px-6 py-6 flex items-center space-x-2">
        <button
          onClick={() => {
            setSelectedCategory(category);
            setOpenUpdateModal(true);
          }}
          className="px-3 py-1 text-sm bg-green-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setOpenDeleteModal(true);
          }}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded"
        >
          Delete
        </button>
        <Link
          href={`/menu/${category.id}/`}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded"
        >
          View Items
        </Link>

        <DeleteDialog
          open={OpenDeleteModal}
          setOpen={setOpenDeleteModal}
          onDelete={handleDelete}
          title="Delete Category"
          description="Are you sure you want to delete this category?"
        />
      </td>
    </>
  );
}
