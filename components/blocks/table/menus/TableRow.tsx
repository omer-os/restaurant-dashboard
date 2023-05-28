"use client";
import React, { useContext } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { MenuItem } from "@lib/interfacses";
import { MenuitemContext } from "./MenuContext";

type MenuItemProps = {
  item: MenuItem;
  setOpenDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const TableRow: React.FC<MenuItemProps> = ({ item, setOpenDeleteDialog }) => {
  const {
    OpenUpdateModal,
    setOpenUpdateModal,
    selectedMenuItem,
    setSelectedMenuItem,
  } = useContext(MenuitemContext);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <img
          src={item.image_url}
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
      <td className="px-6 py-4 whitespace-nowrap">{item.basePrice}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.variants?.length}</td>
      <td className="px-6 py-4 whitespace-nowrap">{item.extras?.length}</td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-start">
        <button
          className="text-blue-600 hover:text-blue-900 mr-2 hover:bg-blue-200 rounded-full p-2 hover:ring-1 ring-blue-600"
          onClick={() => {
            setSelectedMenuItem(item);

            setOpenUpdateModal(true);
          }}
        >
          <FiEdit2 />
        </button>
        <button
          className="text-red-600 hover:text-red-900 hover:bg-red-200 rounded-full p-2 hover:ring-1 ring-red-600"
          onClick={() => {
            setSelectedMenuItem(item);
            setOpenDeleteDialog(true);
          }}
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
