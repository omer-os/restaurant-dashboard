import { db } from "@lib/firebase";

export const getRestaurantByOwnerId = async (ownerId: string) => {
  const querySnapshot = await db
    .collection("restaurants")
    .where("ownerId", "==", ownerId)
    .get();

  if (!querySnapshot.empty) {
    let restaurant = null;

    querySnapshot.forEach((doc) => {
      restaurant = { id: doc.id, ...doc.data() };
    });

    return restaurant;
  } 
  // else {
  //   throw new Error("No restaurant found for this user!");
  // }
};

export const updateRestaurantInfo = async (
  ownerId: string,
  updatedInfo: Partial<Restaurant>
): Promise<void> => {
  const restaurant: any = await getRestaurantByOwnerId(ownerId);
  if (restaurant && restaurant.id) {
    await db.collection("restaurants").doc(restaurant.id).update(updatedInfo);
  } 
  // else {
  //   throw new Error("No restaurant found for this user!");
  // }
};
