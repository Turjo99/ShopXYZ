import getProducts from "@/utils/getProducts";
import React from "react";

const SingleCategory = ({ category }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full mt-5">
      <figure>
        <img src={category.imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
