import React from "react";
import SingleCategory from "./SingleCategory";
import { getCategoriesFromDb } from "../services/categories.service";
import getCategories from "@/utils/getCategories";
import getProducts from "@/utils/getProducts";

const Categories = async () => {
  const categories = await getCategories();
  const products = await getProducts();
  // console.log(products);
  return (
    <>
      <h1 className=" text-3xl font-bold text-center my-5">Categories</h1>
      <div className="grid grid-cols-3 justify-items-center mb-5  gap-3">
        {categories.map((category) => (
          <SingleCategory
            key={category._id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </>
  );
};

export default Categories;
