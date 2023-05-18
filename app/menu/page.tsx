import MenusList from "@components/blocks/editComponents/MenusList";
import MenuItemsTable from "@components/blocks/tables/MenuItemsTable";
import { auth } from "@lib/firebase";

export default async function page() {

  return (
    <div className="lg:p-5 rounded border min-h-[20em]">
      {/* <CategoriesTable /> */}
      <MenusList />
      <MenuItemsTable />
    </div>
  );
}
