import getProducts from "@/utils/getProducts";
import React from "react";
import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { cid, imageUrl, name } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full mt-5">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href={`/products?cid=${cid}`}>explore</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
