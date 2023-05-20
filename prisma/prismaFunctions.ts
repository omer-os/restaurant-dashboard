import { auth } from "@clerk/nextjs";
import {
  PrismaClient,
  Restaurant,
  Menu,
  MenuItem,
  Order,
} from "@prisma/client";

const prisma = new PrismaClient();

// RESTAURANT OPERATIONS
async function createRestaurant(restaurant: Omit<Restaurant, "id">) {
  return await prisma.restaurant.create({ data: restaurant });
}

async function getRestaurantById(id: string) {
  return await prisma.restaurant.findUnique({ where: { id } });
}

async function getRestaurantsByOwnerId(userId: string) {
  return await prisma.restaurant.findMany({
    where: {
      ownerId: userId,
    },
  });
}

async function updateRestaurant(
  id: string,
  updatedFields: Partial<Restaurant>
) {
  return await prisma.restaurant.update({ where: { id }, data: updatedFields });
}

async function deleteRestaurant(id: string) {
  return await prisma.restaurant.delete({ where: { id } });
}

// MENU OPERATIONS
async function createMenu(menu: Omit<Menu, "id">) {
  return await prisma.menu.create({ data: menu });
}

async function getMenuById(id: string) {
  return await prisma.menu.findUnique({ where: { id } });
}

async function getMenusByRestaurantId(restaurantId: string) {
  return await prisma.menu.findMany({ where: { restaurantId } });
}

async function updateMenu(id: string, updatedFields: Partial<Menu>) {
  return await prisma.menu.update({ where: { id }, data: updatedFields });
}

async function deleteMenu(id: string) {
  return await prisma.menu.delete({ where: { id } });
}

// MENU ITEM OPERATIONS
async function createMenuItem(menuItem: Omit<MenuItem, "id">) {
  return await prisma.menuItem.create({ data: menuItem });
}

async function getMenuItemById(id: string) {
  return await prisma.menuItem.findUnique({ where: { id } });
}

async function getMenuItemsByMenuId(menuId: string) {
  return await prisma.menuItem.findMany({ where: { menuId } });
}

async function updateMenuItem(id: string, updatedFields: Partial<MenuItem>) {
  return await prisma.menuItem.update({ where: { id }, data: updatedFields });
}

async function deleteMenuItem(id: string) {
  return await prisma.menuItem.delete({ where: { id } });
}

// ORDER OPERATIONS
async function createOrder(order: Omit<Order, "id">) {
  return await prisma.order.create({ data: order });
}

async function getOrderById(id: string) {
  return await prisma.order.findUnique({ where: { id } });
}

async function getOrdersByRestaurantId(restaurantId: string) {
  return await prisma.order.findMany({ where: { restaurantId } });
}

async function updateOrder(id: string, updatedFields: Partial<Order>) {
  return await prisma.order.update({ where: { id }, data: updatedFields });
}

async function deleteOrder(id: string) {
  return await prisma.order.delete({ where: { id } });
}

// EXPORTING ALL THE FUNCTIONS
export {
  createRestaurant,
  getRestaurantById,
  getRestaurantsByOwnerId,
  updateRestaurant,
  deleteRestaurant,
  createMenu,
  getMenuById,
  getMenusByRestaurantId,
  updateMenu,
  deleteMenu,
  createMenuItem,
  getMenuItemById,
  getMenuItemsByMenuId,
  updateMenuItem,
  deleteMenuItem,
  createOrder,
  getOrderById,
  getOrdersByRestaurantId,
  updateOrder,
  deleteOrder,
};

export async function handleUpdateRestaurantInfo(data: FormData) {
  "use server";

  const RestaurantId = data.get("id");
  const name = data.get("name");
  const description = data.get("description");
  const email = data.get("email");
  const address = data.get("address");
  const city = data.get("city");
  const country = data.get("country");
  const zipCode = data.get("zipCode");
  const phone = data.get("phone");
  const website = data.get("website");
  const logo = data.get("logo");

  // Get the current user. How you do this depends on how you're handling authentication.
  // For example, if you're using JWT authentication, you might decode the JWT token
  // that was sent with the request to get the user's id.
  const userId = auth().userId;

  // console.log(userId);

  // Fetch the restaurant from the database
  const restaurant = await prisma.restaurant.findUnique({
    where: { id: RestaurantId as string },
  });

  // If the restaurant doesn't exist, handle the error
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }

  // If the current user isn't the owner of the restaurant, handle the error
  if (restaurant.ownerId !== userId) {
    throw new Error("User not authorized to update this restaurant");
  }

  // If the user is authorized, update the restaurant
  try {
    await prisma.restaurant.update({
      where: { id: RestaurantId as string },
      data: {
        name: name as string,
        description: description as string,
        email: email as string,
        address: address as string,
        city: city as string,
        country: country as string,
        zipCode: zipCode as string,
        phone: phone as string,
        website: website as string,
        logo: logo as string,
      },
    });
    console.log("Restaurant info updated");
  } catch (error) {
    console.log("Error updating restaurant info:", error);
  }
}
