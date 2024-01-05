import React from "react";
import SingleCategory from "./SingleCategory";
import { getCategoriesFromDb } from "../services/categories.service";
import getCategories from "@/utils/getCategories";

const Categories = async () => {
  const category = await getCategories();
  console.log(category);
  return (
    <div className="grid grid-cols-3 justify-items-center mb-5 mt-5">
      <SingleCategory></SingleCategory>
    </div>
  );
};

export default Categories;
