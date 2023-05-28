export interface Category {
  image: string;
  name: string;
  itemsNo: number;
  status: boolean | "auto";
  id: string;

  activeDate: {
    startDate: { month: number; day: number };
    endDate: { month: number; day: number };
  };
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image_url: string;
  basePrice: number;
  variants?: {
    name: string;
    price: number;
  }[];
  extras?: {
    name: string;
    additionalCost: number;
  }[];

  status: boolean | "auto" | "basedOnCategory";

  activeDate: {
    startDate: { month: number; day: number };
    endDate: { month: number; day: number };
  };
}
