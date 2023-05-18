"use client";

import { useContext, useEffect, useState } from "react";
import {
  DataSheetGrid,
  textColumn,
  keyColumn,
  Column,
} from "react-datasheet-grid";
import Avatar from "@components/elements/avatar/Avatar";
import {
  getMenuData,
  getMenusByRestaurantId,
  updateMenuData,
} from "@lib/firebaseFunctions/Menus";
import { RestaurantContext } from "@components/pages/layouts/MainLayout";

export default function MenuTable() {
  const [data, setData] = useState<Menu[]>([]);
  const { restarant } = useContext(RestaurantContext);

  const handleChange = (newData: Menu[]) => {
    setData(newData);
  };

  if (restarant && restarant.id) {
    getMenusByRestaurantId(restarant.id).then((menus) => {
      setData(menus as any);
    });
  }

  const columns: Column<Menu>[] = [
    {
      ...keyColumn("restaurantId", textColumn as Column<string>),
      title: "Restaurant ID",
    },
    {
      ...keyColumn("name", textColumn as Column<string>),
      title: "Name",
    },
    {
      ...keyColumn("description", textColumn as Column<string>),
      title: "Description",
    },
    // other columns here ...
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Menus</h1>
      <DataSheetGrid value={data} onChange={handleChange} columns={columns} />
    </div>
  );
}
