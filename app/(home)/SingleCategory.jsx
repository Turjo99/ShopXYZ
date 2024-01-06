import getProducts from "@/utils/getProducts";
import React from "react";
import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { cid, imageUrl, name } = category;
  return (
    <Link href={`/products?cid=${cid}`}>
      <div className=" z-10 card  h-80 bg-base-100 shadow-xl image-full mt-5">
        <figure>
          <img src={imageUrl} className=" " alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <button className=" btn btn-primary">Explore More</button>
        </div>
      </div>
    </Link>
  );
};

export default SingleCategory;
