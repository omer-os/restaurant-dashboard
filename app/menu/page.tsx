import CategoryModal from "@components/blocks/modal/CategoryModal";
import CategoriesTable from "@components/blocks/table/CategoriesTable";
import React from "react";

export default function page() {
  return (
    <div className="p-4 bg-white">
      <CategoriesTable />
    </div>
  );
}
