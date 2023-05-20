import { auth } from "@clerk/nextjs";
import {prisma} from "../prisma/prismaClient";
import {
  createRestaurant,
  getRestaurantsByOwnerId,
} from "../prisma/prismaFunctions";
import HomeRestaurantInfo from "@components/pages/home/HomeRestaurantInfo";

export default async function page() {
  const { userId } = auth();

  // get restaurants for user
  const restaurants = await getRestaurantsByOwnerId(userId as string);

  // if user has no restaurants, create a new one
  if (restaurants.length === 0) {
    await createRestaurant({
      address: "restaurant name",
      city: "city",
      country: "",
      description: "lorem ipsum",
      name: "",
      ownerId: userId as string,
      phone: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      email: "",
      website: "",
      logo: "",
      zipCode: "",
    });
  }


  // console.log(restaurants);
  

  return (
    <div>
      <HomeRestaurantInfo 
        restaurant={restaurants[0]}
      />
    </div>
  );
}
