import getProducts from "@/utils/getProducts";
import SingleProduct from "./SingleProduct";
import { getProductsFromDb } from "../services/products.service";

export const revalidate = 0;

export const metadata = {
  title: "Products - ShopXYZ Shop",
};

const ProductsPage = async ({ searchParams: { cid } }) => {
  const cidInt = parseInt(cid);
  const products = await getProductsFromDb(cidInt);
  //   console.log(cidInt);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 place-items-center  ">
        {products.map((product) => (
          <SingleProduct product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
