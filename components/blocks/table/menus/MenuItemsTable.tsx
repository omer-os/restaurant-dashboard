"use client";

import { useContext, useEffect, useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import TextInput from "@components/elements/input/TextInput";
import MenuItemModal from "../../modal/MenuItemModal";
import Button from "@components/elements/button/Button";
import { MenuItem } from "@lib/interfacses";
import TableRow from "./TableRow";
import { MenuitemContext } from "./MenuContext";
import DeleteDialog from "@components/blocks/dialog/DeleteDialog";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const tableHeadings: string[] = [
  "Image",
  "Name",
  "Description",
  "basePrice",
  "variants",
  "extras",
  "Actions",
];
const mI: MenuItem[] = [
  {
    id: "1",
    name: "Pasta Carbonara",
    description: "Classic Italian pasta dish with creamy sauce and bacon",
    image_url: "https://placehold.co/300x300",
    activeDate: {
      endDate: {
        day: 1,
        month: 1,
      },
      startDate: {
        day: 1,
        month: 1,
      },
    },
    basePrice: 10,
    variants: [
      {
        name: "large pasta",
        price: 23,
      },
      {
        name: "small pasta",
        price: 12,
      },
    ],
    extras: [
      {
        name: "extra cheese",
        additionalCost: 2,
      },
      {
        name: "extra bacon",
        additionalCost: 3,
      },
    ],
    status: "basedOnCategory",
  },
];

export default function MenuItemsTable(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

  const {
    menuItems,
    setMenuItems,
    OpenUpdateModal,
    selectedMenuItem,
    setOpenUpdateModal,
    setSelectedMenuItem,
  } = useContext(MenuitemContext);

  useEffect(() => {
    setMenuItems(mI);
  }, []);

  const filteredData: MenuItem[] = menuItems.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDelete = () => {
    setMenuItems(menuItems.filter((item) => item.id !== selectedMenuItem.id));
    setOpenDeleteDialog(false);
  };

  const handleAddNewItem = () => {
    // Create a new item with default or random data
    const newItem: MenuItem = {
      id: Math.random().toString(), // Generate a unique id for the new item
      name: "New Menu Item",
      description: "New menu item description",
      image_url: "https://placehold.co/300x300",
      activeDate: {
        endDate: {
          day: 1,
          month: 1,
        },
        startDate: {
          day: 1,
          month: 1,
        },
      },
      basePrice: 10,
      variants: [
        {
          name: "default variant",
          price: 0,
        },
      ],
      extras: [
        {
          name: "default extra",
          additionalCost: 0,
        },
      ],
      status: "basedOnCategory",
    };

    // Add the new item to the menuItems state
    setMenuItems([...menuItems, newItem]);
  };

  return (
    <div className="overflow-x-auto overflow-y-scroll max-h-[75vh]">
      <div className="w-max sticky left-0">
        <Link href="/menu">
          <Button startIcon={<BsArrowLeft />} bg={"white"}>
            Go Back
          </Button>
        </Link>
      </div>

      <div className="sticky left-0">
        <div className="text-3xl font-bold">All Menu Items</div>

        <div className="my-4">
          <div className="flex relative">
            <FiSearch className="text-gray-500 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search for menus..."
              className="px-4 border w-full border-gray-300 rounded py-2 pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
            <TableRow
              setOpenDeleteDialog={setOpenDeleteDialog}
              key={index}
              item={item}
            />
          ))}
        </tbody>
      </table>
      <MenuItemModal open={OpenUpdateModal} setOpen={setOpenUpdateModal} />
      <DeleteDialog
        description="Are you sure you want to delete this menu item?"
        onDelete={handleDelete}
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        title={`Delete ${selectedMenuItem ? selectedMenuItem.name : ""}`}
      />

      <Button
        onClick={handleAddNewItem}
        startIcon={<FiPlus />}
        className="mt-4"
      >
        Add new item
      </Button>
    </div>
  );
}
