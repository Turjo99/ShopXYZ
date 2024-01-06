import { getProductByIdFromDb } from "@/app/services/products.service";
import { cache } from "react";
import "server-only";

const getSingleProduct = cache(getProductByIdFromDb);

export default getSingleProduct;
