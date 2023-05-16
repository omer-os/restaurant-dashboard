import CategoriesTable from "@components/blocks/tables/CategoriesTable";
import MenuItemsTable from "@components/blocks/tables/MenuItemsTable";

export default function page() {
  return (
    <div className="p-5 bg-white shadow-lg rounded border border-zinc-200 min-h-[20em]">
      <CategoriesTable />

      <MenuItemsTable />
    </div>
  );
}
