"use client";
import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  Column,
} from "react-datasheet-grid";
import { useState, ChangeEvent } from "react";
import Avatar from "@components/elements/avatar/Avatar";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const AvatarImage = ({
  rowData,
  setRowData,
  active,
}: {
  rowData: MenuItem;
  setRowData: (rowData: MenuItem) => void;
  active: boolean;
}) => {
  const [image, setImage] = useState(rowData.image);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      setRowData({
        ...rowData,
        image: reader.result as string,
      });
    };
    reader.readAsDataURL(file);

    e.target.value = "";
  };

  return (
    <button className="relative">
      <Avatar alt={rowData.name} src={image} />
      {active && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <input
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <span className="text-white">Change</span>
        </div>
      )}
    </button>
  );
};

export default function MenuItemsTable() {
  const [data, setData] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Item 1",
      description: "Description 1",
      price: 10.99,
      image: "https://avatars.githubusercontent.com/u/22380818?s=48&v=4",
    },
    {
      id: "2",
      name: "Item 2",
      description: "Description 2",
      price: 7.99,
      image: "https://avatars.githubusercontent.com/u/22380818?s=48&v=4",
    },
    {
      id: "3",
      name: "Item 3",
      description: "Description 3",
      price: 15.99,
      image: "https://avatars.githubusercontent.com/u/22380818?s=48&v=4",
    },
  ]);

  const columns: Column<MenuItem>[] = [
    {
      ...keyColumn("id", textColumn as Column<string>),
      title: "ID",
    },
    {
      ...keyColumn("name", textColumn as Column<string>),
      title: "Name",
    },
    {
      ...keyColumn("description", textColumn as Column<string>),
      title: "Description",
    },
    {
      ...keyColumn("price", textColumn as any),
      title: "Price",
    },
    {
      title: "Menu Item Image",
      component: AvatarImage,
    },
  ];

  return (
    <div className="p-4 mt-10 bg-white shadow-lg rounded border border-zinc-200 min-h-[20em]">
      <h1 className="text-2xl font-bold mb-4">Menu Items</h1>
      <DataSheetGrid
        value={data}
        onChange={(change) => setData(change)}
        columns={columns}
      />
    </div>
  );
}
