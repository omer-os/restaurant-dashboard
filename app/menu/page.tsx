import { auth } from "@clerk/nextjs/app-beta";
import MenusList from "@components/blocks/editComponents/MenusList";
import { db } from "@lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { redirect } from "next/navigation";

export default async function page() {
  const { userId } = auth();
  const restaurantSnap = await getDocs(
    query(collection(db, "restaurants"), where("ownerId", "==", userId))
  );

  if (restaurantSnap.empty) {
    redirect("/");
  }

  const restaurantId = restaurantSnap.docs[0].id;

  // Assuming there is one and only one restaurant for a owner
  const restaurantDoc = restaurantSnap.docs[0];
  const menusRef = collection(restaurantDoc.ref, "menus");
  const menusSnap = await getDocs(menusRef);

  const allMenus: Menu[] = menusSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  }) as Menu[];
  return (
    <div className="lg:p-5 rounded border min-h-[20em]">
      <MenusList allMenus={allMenus} restaurantId={restaurantId} />
    </div>
  );
}
