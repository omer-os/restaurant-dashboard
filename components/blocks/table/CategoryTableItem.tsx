"use client";
import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import CategoryModal from "../modal/CategoryModal";
import DeleteDialog from "../dialog/DeleteDialog";
import { motion } from "framer-motion";

export default function CategoryTableItem({
  item,
  setCategories,
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
}) {
  const handleDelete = (id: string) => {
    setCategories((prev: any) => prev.filter((item: any) => item.id !== id));
  };

  const handleEdit = (id: string) => {
    console.log(`Editing item with id ${id}`);

    setCategories((prev: any) =>
      prev.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            name: categoryName,
            description: categoryDescription,
            image: categoryImage,
          };
        } else {
          return item;
        }
      })
    );
  };

  const [OpenModal, setOpenModal] = useState(false);
  const [OpenDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [categoryName, setCategoryName] = useState(item.name);
  const [categoryDescription, setCategoryDescription] = useState(
    item.description
  );
  const [categoryImage, setCategoryImage] = useState(item.image);

  return (
    <tr key={item.id}>
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
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <>
          <button
            className="text-blue-600 hover:text-blue-900 mr-2 hover:bg-blue-200 rounded-full p-2 hover:ring-1 ring-blue-600"
            onClick={() => setOpenModal(true)}
          >
            <FiEdit2 />
          </button>
          <CategoryModal
            categoryName={categoryName}
            setCategoryName={setCategoryName}
            categoryDescription={categoryDescription}
            setCategoryDescription={setCategoryDescription}
            categoryImage={categoryImage}
            setCategoryImage={setCategoryImage}
            open={OpenModal}
            setOpen={setOpenModal}
            onSave={() => {
              handleEdit(item.id);
            }}
          />
        </>
        <button
          className="text-red-600 hover:text-red-900 hover:bg-red-200 rounded-full p-2 hover:ring-1 ring-red-600"
          onClick={() => setOpenDeleteDialog(true)}
        >
          <FiTrash2 />
        </button>
        <DeleteDialog
          description="Are you sure you want to delete this category?"
          onDelete={() => handleDelete(item.id)}
          open={OpenDeleteDialog}
          setOpen={setOpenDeleteDialog}
          title={`Delete ${item.name}`}
        />
      </td>

      {/* Modal */}
    </tr>
  );
}
