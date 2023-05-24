"use client";

import { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import TextInput from "@components/elements/input/TextInput";
import DeleteDialog from "../dialog/DeleteDialog";
import MenuItem from "./MenuItem";
import MenuItemModal from "../modal/MenuItemModal";
import Button from "@components/elements/button/Button";
import DialogBox from "../dialog/DialogBox";
import UploadImageWrapper from "@components/elements/imageoperations/UploadImageComponent";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  prices: { name: string; value: string }[];
}

const tableHeadings: string[] = [
  "Image",
  "Name",
  "Description",
  "Created At",
  "Actions",
];
const mI: MenuItem[] = [
  {
    id: "1",
    name: "Pasta Carbonara",
    description: "Classic Italian pasta dish with creamy sauce and bacon",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "10.99",
      },
      {
        name: "lg",
        value: "15.99",
      },
    ],
  },
  {
    id: "2",
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with tomato, mozzarella, and basil",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "9.99",
      },
      {
        name: "lg",
        value: "13.99",
      },
    ],
  },
  {
    id: "3",
    name: "Chicken Tikka Masala",
    description:
      "Indian curry dish with grilled chicken in creamy tomato sauce",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "11.99",
      },
      {
        name: "lg",
        value: "16.99",
      },
    ],
  },
  {
    id: "4",
    name: "Beef Burger",
    description:
      "Classic burger with 100% beef patty, lettuce, tomato, and cheese",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "7.99",
      },
      {
        name: "lg",
        value: "12.99",
      },
    ],
  },
  {
    id: "5",
    name: "Caesar Salad",
    description:
      "Classic Caesar salad with romaine lettuce, croutons, and cheese",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "5.99",
      },
      {
        name: "lg",
        value: "9.99",
      },
    ],
  },
  {
    id: "6",
    name: "Chicken Quesadilla",
    description: "Grilled chicken, cheese, and peppers in a toasted tortilla",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "8.99",
      },
      {
        name: "lg",
        value: "13.99",
      },
    ],
  },
  {
    id: "7",
    name: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich beef tomato sauce",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "10.99",
      },
      {
        name: "lg",
        value: "15.99",
      },
    ],
  },
  {
    id: "8",
    name: "Tacos",
    description: "Traditional Mexican dish with beef, lettuce, and salsa",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "6.99",
      },
      {
        name: "lg",
        value: "11.99",
      },
    ],
  },
  {
    id: "9",
    name: "Sushi Rolls",
    description: "Assorted sushi rolls with various fillings",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "12.99",
      },
      {
        name: "lg",
        value: "18.99",
      },
    ],
  },
  {
    id: "10",
    name: "French Fries",
    description: "Crispy golden fries, served with ketchup",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "3.99",
      },
      {
        name: "lg",
        value: "5.99",
      },
    ],
  },
  {
    id: "11",
    name: "Chicken Fried Rice",
    description: "Stir-fried rice with chicken, egg, and vegetables",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "7.99",
      },
      {
        name: "lg",
        value: "12.99",
      },
    ],
  },
  {
    id: "12",
    name: "Mushroom Risotto",
    description: "Creamy Italian rice dish with mushrooms",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "9.99",
      },
      {
        name: "lg",
        value: "14.99",
      },
    ],
  },
  {
    id: "13",
    name: "Pad Thai",
    description: "Thai stir-fried noodles with shrimp, tofu, and peanuts",
    image: "https://placehold.co/300x300",
    createdAt: new Date(),
    updatedAt: new Date(),
    prices: [
      {
        name: "sm",
        value: "11.99",
      },
      {
        name: "lg",
        value: "16.99",
      },
    ],
  },
];

export default function MenuItemsTable(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [currentMenuItem, setCurrentMenuItem] = useState<MenuItem | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mI);

  const filteredData: MenuItem[] = menuItems.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDelete = () => {
    if (currentMenuItem) {
      setMenuItems((prev) =>
        prev.filter((item) => item.id !== currentMenuItem.id)
      );
    }
  };

  const [menuItemName, setMenuItemName] = useState<string>("");
  const [menuItemDescription, setMenuItemDescription] = useState<string>("");
  const [menuItemImage, setMenuItemImage] = useState<string>("");
  const [menuItemPrices, setMenuItemPrices] = useState<
    { name: string; value: string }[]
  >([]);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [imageDownloadURL, setImageDownloadURL] = useState<string | null>("");

  const handleAddNewItem = () => {
    setOpenDialog(true);
  };

  const handleSaveItem = () => {
    if (currentMenuItem) {
      setMenuItems((prev) =>
        prev.map((item) =>
          item.id === currentMenuItem.id
            ? {
                ...item,
                name: menuItemName,
                description: menuItemDescription,
                image: menuItemImage,
                prices: menuItemPrices,
              }
            : item
        )
      );
    } else {
      setMenuItems((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          name: menuItemName,
          description: menuItemDescription,
          image: menuItemImage,
          prices: menuItemPrices,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
    setOpenModal(false);
  };

  return (
    <div className="overflow-x-auto overflow-y-scroll max-h-[70vh]">
      <div className="sticky left-0">
        <div className="text-3xl font-bold">All Menu Items</div>

        <div className="mb-3 mt-6">
          <TextInput
            startIcon={<FiSearch />}
            State={searchTerm}
            setState={setSearchTerm}
            placeholder="Search for menu Items..."
            className="md:max-w-[300px]"
          />
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
            <MenuItem
              key={item.id}
              item={item}
              onEdit={() => {
                setMenuItemName(item.name);
                setMenuItemDescription(item.description);
                setMenuItemImage(item.image);
                setMenuItemPrices(item.prices);
                setCurrentMenuItem(item);
                setOpenModal(true);
              }}
              onDelete={() => {
                setCurrentMenuItem(item);
                setOpenDeleteDialog(true);
              }}
            />
          ))}
        </tbody>
      </table>
      <MenuItemModal
        menuItemName={menuItemName}
        setMenuItemName={setMenuItemName}
        menuItemDescription={menuItemDescription}
        setMenuItemDescription={setMenuItemDescription}
        menuItemImage={menuItemImage}
        setMenuItemImage={setMenuItemImage}
        menuItemPrices={menuItemPrices}
        setMenuItemPrices={setMenuItemPrices}
        onSave={handleSaveItem}
        open={openModal}
        setOpen={setOpenModal}
      />

      <DeleteDialog
        description="Are you sure you want to delete this menu item?"
        onDelete={handleDelete}
        open={openDeleteDialog}
        setOpen={(isOpen: boolean) => {
          if (!isOpen) setCurrentMenuItem(null);
          setOpenDeleteDialog(isOpen);
        }}
        title={`Delete ${currentMenuItem ? currentMenuItem.name : ""}`}
      />

      <DialogBox open={openDialog} setOpen={setOpenDialog}>
        <div className="bg-white rounded p-4 shadow-lg flex flex-col sm:w-[30em] w-[20em]">
          <div className="text-2xl font-bold mb-4">Create New Menu Item</div>

          <div className="flex flex-col gap-3">
            <UploadImageWrapper setImageUrl={setImageDownloadURL}>
              <div className="w-full rounded h-[15em] bg-zinc-300 mx-auto">
                {imageDownloadURL && (
                  <img
                    className="w-full h-full object-cover rounded"
                    src={imageDownloadURL}
                    alt=""
                  />
                )}
              </div>
            </UploadImageWrapper>

            <TextInput
              label="Name"
              State={menuItemName}
              setState={setMenuItemName}
              placeholder="Enter the name"
            />

            <TextInput
              label="Description"
              State={menuItemDescription}
              setState={setMenuItemDescription}
              placeholder="Enter the description"
            />

            <Button onClick={handleSaveItem}>Save Item</Button>
          </div>
        </div>
      </DialogBox>

      <Button
        startIcon={<FiPlus />}
        onClick={handleAddNewItem}
        className="mt-4"
      >
        Add new item
      </Button>
    </div>
  );
}
