import RestaurantInfoCard from "@components/templates/restaurantInfo/RestaurantInfoCard";
import { auth, db } from "@lib/firebase";

export default async function Page() {
  return (
    <div>
      <RestaurantInfoCard />
    </div>
  );
}
