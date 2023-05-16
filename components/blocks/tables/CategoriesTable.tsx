"use client";

import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  Column,
} from "react-datasheet-grid";
import { useState } from "react";
import Avatar from "@components/elements/avatar/Avatar";
import MenuItemsTable from "@components/blocks/tables/MenuItemsTable";

type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export default function CategoriesTable() {
  const [data, setData] = useState<Category[]>([
    {
      id: "1",
      name: "Category 1",
      description: "Description 1",
      image: "https://avatars.githubusercontent.com/u/22380818?s=48&v=4",
    },
    {
      id: "2",
      name: "Category 1",
      description: "Description 1",
      image: "https://avatars.githubusercontent.com/u/22380818?s=48&v=4",
    },
    {
      id: "3",
      name: "Category 1",
      description: "Description 1",
      image: "https://avatars.githubusercontent.com/u/22380818?s=48&v=4",
    },
  ]);

  const columns: Column<Category>[] = [
    {
      ...keyColumn("id", textColumn as Column<string>),
      title: "ID",
    },
    {
      ...keyColumn("name", textColumn as Column<string>),
      title: "Active",
    },
    {
      ...keyColumn("description", textColumn as Column<string>),
      title: "Description",
    },

    {
      title: "category image",
      component: ({ rowData, setRowData, active }) => {
        const [image, setImage] = useState(rowData.image);

        return (
          <button className="relative">
            <Avatar alt={rowData.name} src={image} />
            {active && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e: any) => {
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
                  }}
                />
                <span className="text-white">Change</span>
              </div>
            )}
          </button>
        );
      },
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <DataSheetGrid
        value={data}
        onChange={(change) => setData(change)}
        columns={columns}
      />
    </div>
  );
}
