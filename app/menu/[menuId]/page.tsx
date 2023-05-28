import { MenuItemProvider } from "@components/blocks/table/menus/MenuContext";
import MenuItemsTable from "@components/blocks/table/menus/MenuItemsTable";
import Button from "@components/elements/button/Button";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function page() {
  return (
    <div className="p-4 bg-white">

      <MenuItemProvider>
        <MenuItemsTable />
      </MenuItemProvider>
    </div>
  );
}
