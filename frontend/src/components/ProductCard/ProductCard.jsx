import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-lg overflow-hidden w-full">
        <figure className="px-4 pt-4">
          <img
            src={product.images[0]} // first image
            alt={product.title}
            className="rounded-lg object-cover w-full h-48"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.title}</h2>
          <p>${product.price}</p>
          <div className=" mt-4 flex flex-row justify-between w-full gap-2">
            {/* See More button */}
            <Link
              to={`/products/${product.id}`}
              className="btn btn-outline w-1/2"
            >
              See More
            </Link>

            {/* Add to Cart button */}
            <button className="btn btn-primary w-1/2 flex items-center justify-center gap-2">
              <IoCartOutline size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
