import { db } from "@lib/firebase";

export type Menu = {
  id?: string;
  restaurantId: string;
  name: string;
  description: string;
  createdAt: any;
  updatedAt: any;
};

export const getMenuData = async (): Promise<Menu[]> => {
  const menus = await db.collection("menus").get();
  return menus.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Menu));
};

export const updateMenuData = async (newData: Menu[]): Promise<void> => {
  const dbUpdates = newData.map((menu) =>
    db.collection("menus").doc(menu.id!).update(menu)
  );
  await Promise.all(dbUpdates);
};





export const getMenusByRestaurantId = async (restaurantId: string) => {
  const querySnapshot = await db
    .collection("Menus")
    .where("restaurantId", "==", restaurantId)
    .get();

  // if (!querySnapshot.empty) {
  //   let menus = [];

  //   querySnapshot.forEach((doc) => {
  //     menus.push({ id: doc.id, ...doc.data() });
  //   });

  //   return menus;
  // } else {
  //   throw new Error("No menus found for this restaurant!");
  // }
};
