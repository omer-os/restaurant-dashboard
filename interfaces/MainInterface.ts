export type Restaurant = {
  id: string;
};
export interface Order {
  id: string;
  userId: string;
  restaurantId: string;
  menuItems: string[];
  totalAmount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  restaurant?: Restaurant;
}
