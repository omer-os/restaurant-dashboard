import React from "react";
import CategoryItem from "./CategoryItem";

export default function MenusList() {
  
  
  return (
    <div>
      <h1 className="md:text-2xl text-lg sticky sm:top-14 top-14 sm:p-4 p-2 bg-white z-10 left-0 shadow-lg flex items-center font-bold">
        Menu Categories:
      </h1>
      <div className="flex mt-4 flex-col gap-3">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}
