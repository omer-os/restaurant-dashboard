import { auth } from "@clerk/nextjs/app-beta";
import { db } from "@lib/firebase";
import RestaurantInfoComponent from "@components/templates/restaurantInfo/RestaurantInfoCard";
import NewRestaurantComponent from "@components/blocks/RestaurantInfo/CreateNewRestaurantCom";

export default async function Page() {
 
  const { userId } = auth();

  const restaurantRes = await db
    .collection("restaurants")
    .where("ownerId", "==", userId)
    .get();
  const restaurant = restaurantRes.docs[0]?.data() as Restaurant;
  const restaurantId = restaurantRes.docs[0]?.id;

  return (
    <div>
      <div>
        {restaurant ? (
          <RestaurantInfoComponent
            restaurantId={restaurantId as string}
            restaurant={restaurant}
          />
        ) : (
          <NewRestaurantComponent />
        )}
      </div>
    </div>
  );
}
