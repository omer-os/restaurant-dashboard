import { auth } from "@clerk/nextjs";
import CategoriesTable from "@components/blocks/tables/CategoriesTable";
import { prisma } from "../../prisma/prismaClient";
import { redirect } from "next/navigation";

export default async function page() {
  const { userId } = auth();
  // if (!restaurant) {
  //   redirect("/");
  // }

  const restaurant = await prisma.restaurant.findFirst({
    where: {
      ownerId: userId as string,
    },
    include: {
      menus: true,
    },
  });



  console.log(restaurant);
  

  return (
    <div>
      {/* <CategoriesTable restaurant={restaurant} /> */}
    </div>
  );
}
