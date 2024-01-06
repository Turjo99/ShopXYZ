import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { imageUrl, title, price, _id } = product;
  console.log(product);

  return (
    <div className="m-5  shadow-xl dark:shadow-blue-900 rounded-lg">
      <Link href={`/products/${_id}`}>
        <div class="max-w-xs overflow-hidden bg-white  dark:bg-gray-800">
          <div class="px-4 py-2">
            <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">
              {title}
            </h1>
          </div>

          <img class="object-cover w-full h-48 mt-2" src={imageUrl} alt="" />

          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 class="text-lg font-bold text-white">${price}</h1>
            <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
