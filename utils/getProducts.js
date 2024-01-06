import { getProductsFromDb } from "@/app/services/products.service";
import { cache } from "react";
import "server-only";

const getProducts = cache(getProductsFromDb);

export default getProducts;
