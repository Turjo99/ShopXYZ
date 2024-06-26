import { getCategoriesFromDb } from "@/app/services/categories.service";
import { cache } from "react";
import "server-only";

const getCategories = cache(() => {
  return getCategoriesFromDb();
});

export default getCategories;
