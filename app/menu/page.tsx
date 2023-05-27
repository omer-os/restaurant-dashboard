import CategoriesTable from "@components/blocks/table/categories/CategoriesTable";
import { CategoryProvider } from "@components/blocks/table/categories/CategoryContext";

export default function page() {
  return (
    <div className="p-4 bg-white">
      <CategoryProvider>
        <CategoriesTable />
      </CategoryProvider>
    </div>
  );
}
