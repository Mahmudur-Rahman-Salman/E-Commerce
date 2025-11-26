import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const foundProduct = data.find((item) => item.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // loading state
  if (loading) {
    return (
      <span className="loading loading-infinity loading-xl text-center"></span>
    );
  }

  // error state
  if (error) {
    return (
      <p className="text-center mt-20 text-xl text-red-600 font-semibold">
        {error}
      </p>
    );
  }
  return (
    <section class="body-font overflow-hidden pt-20">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            src={product.images[0]}
            alt={product.title}
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <h5 className="text-gray-900 font-bold">{product.slug}</h5>
            <h6>{product.category.name}</h6>

            <p class="leading-relaxed text-gray-600 ">{product.description}</p>

            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div class="flex justify-between items-center">
              <span class="title-font font-medium text-2xl text-gray-900">
                Price: ${product.price}
              </span>
              {/* Add to Cart button */}
              <button className="btn btn-primary w-1/2 flex items-center justify-center gap-2">
                <IoCartOutline size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
