"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import useSWR from "swr";
import { db } from "@lib/firebase";
import RestaurantInfoComponent from "@components/templates/restaurantInfo/RestaurantInfoCard";

const fetchRestaurantData = async (id: string) => {
  const restaurantDoc = await db.collection("restaurants").doc(id).get();
  return restaurantDoc.data() as Restaurant;
};

export default function Page() {
  const { user } = useUser();
  const [restaurantId, setRestaurantId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserRestaurantId = async () => {
      if (!user?.id) {
        return;
      }

      const userRef = db.collection("users").doc(user.id);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        // If the user does not exist in the users collection, create a new user
        // and a new restaurant, and link them.

        // Start a batch
        const batch = db.batch();

        // Create a new restaurant
        const restaurantRef = db.collection("restaurants").doc();
        batch.set(restaurantRef, {
          // Add restaurant details here
          logo: "",
          name: "Restaurant Name",
          description: "restaurant description",
          address: "address",
          city: "city",
          country: "country",
          zipCode: "1234",
          website: "example.com",
          createdAt: "",
          updatedAt: "",
          ownerId: user.id,
        });

        // Create a new user
        batch.set(userRef, {
          restaurantId: restaurantRef.id,
          email: user.emailAddresses[0].emailAddress,
          // Add user details here
        });

        // Commit the batch
        await batch.commit();
        setRestaurantId(restaurantRef.id);
      } else {
        // If the user exists, fetch the associated restaurant
        const restaurantId = userDoc.data()?.restaurantId;
        setRestaurantId(restaurantId);
      }
    };

    fetchUserRestaurantId();
  }, [user?.id, user?.primaryEmailAddress]);

  const { data: restaurant, error } = useSWR(restaurantId, fetchRestaurantData);

  if (error) return <div>Error...</div>;
  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      {restaurant && (
        <RestaurantInfoComponent
          restaurantId={restaurantId as string}
          restaurant={restaurant}
        />
      )}
    </div>
  );
}
