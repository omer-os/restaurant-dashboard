interface Restaurant {
  logo?: string;
  description?: string;
  ownerId?: string;
  name?: string;
  address?: string;
  city?: string;
  country?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  website?: string;
  createdAt?: Date;
  updatedAt?: Date;
  ratings?: number;
  operatingHours?: { [key: string]: any };
  socialMediaLinks?: { [key: string]: any };
  features?: string[];
  admins?: { [key: string]: boolean };
  menus?: { [key: string]: Menu };
  orders?: { [key: string]: Order };
}

interface Menu {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  items: { [key: string]: MenuItem };
}

interface MenuItem {
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  prices: PriceOption[];
}

interface PriceOption {
  name: string;
  value: string;
}

interface Order {
  userId: string;
  totalAmount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
