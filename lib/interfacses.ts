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
