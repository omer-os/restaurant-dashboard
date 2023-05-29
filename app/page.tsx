import { auth } from "@clerk/nextjs/app-beta";
import { db } from "@lib/firebase-admin-config";

export default async function page() {
  const { userId } = auth();
  const RestaurantsCol = db
    .collection("restaurants")
    .where("ownerId", "==", userId);
  const snapshot = await RestaurantsCol.get();

  if (snapshot.empty) {
    const newRestaurant = {
      ownerId: userId,
    };

    const docRef = await db.collection("restaurants").add(newRestaurant);
  }

  return (
    <div>
      {/* <HomePage /> */}

      {userId}
    </div>
  );
}
