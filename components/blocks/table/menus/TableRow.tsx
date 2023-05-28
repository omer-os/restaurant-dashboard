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
  const { setOpenUpdateModal, setSelectedMenuItem } =
    useContext(MenuitemContext);

  let statusClasses = "";

  switch (item.status) {
    case true:
      statusClasses = "text-green-700 bg-green-100 border-green-300";
      break;
    case false:
      statusClasses = "text-red-700 bg-red-100 border-red-300";
      break;
    case "auto":
      statusClasses = "text-blue-700 bg-blue-100 border-blue-300";
      break;
    default:
      statusClasses = "text-yellow-700 bg-yellow-100 border-yellow-300";
  }

  let statusText = "";
  switch (item.status) {
    case true:
      statusText = "Active";
      break;
    case false:
      statusText = "Inactive";
      break;
    case "auto":
      statusText = "Auto";
      break;
    default:
      statusText = "based on category";
  }

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

      <td className="px-6 py-4">
        <div
          className={`flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full w-max ${statusClasses}`}
        >
          <div className="text-xs font-normal leading-none max-w-full flex-initial">
            {statusText}
          </div>
        </div>
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
