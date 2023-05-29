import { auth } from "@clerk/nextjs/app-beta";
import CategoriesTable from "@components/blocks/table/categories/CategoriesTable";
import { CategoryProvider } from "@components/blocks/table/categories/CategoryContext";
import { db } from "@lib/firebase-admin-config";
import { redirect } from "next/navigation";

export default async function page() {
  const { userId } = auth();
  const RestaurantsCol = db
    .collection("restaurants")
    .where("ownerId", "==", userId);

  const snapshot = await RestaurantsCol.get();
  if (snapshot.empty) {
    redirect("/");
  }

  const categoriesCol = snapshot.docs[0].ref.collection("categories");
  const categoriesSnapshot = await categoriesCol.get();

  let categories = categoriesSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  });

  if (categoriesSnapshot.empty) {
    const newCategory = {
      activeDate: {
        endDate: {
          day: 0,
          month: 0,
        },
        startDate: {
          day: 0,
          month: 0,
        },
      },
      name: "Default",
      itemsNo: 0,
      image: "https://placehold.co/300x300",
      status: "auto",
    };

    const docRef = await categoriesCol.add(newCategory);
    const CatId = docRef.id;

    const category = {
      ...newCategory,
      id: CatId,
    };
    categories = [category];
  }

  return (
    <div className="p-4 bg-white">
      <CategoryProvider>
        <CategoriesTable
          CATEGORIES={categories}
          restaurantId={snapshot.docs[0].id}
        />
      </CategoryProvider>
    </div>
  );
}
