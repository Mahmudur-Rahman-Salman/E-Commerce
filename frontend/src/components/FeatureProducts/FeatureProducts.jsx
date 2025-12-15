import React, { useEffect, useState } from "react";
// react icons
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const axios = useAxios();
  
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products"); // your backend products endpoint
        const data = res.data;

        // For now, just take first 8 products as featured
        setProducts(data.slice(0, 8));
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [axios]);



  return (
    <>
      <section className="py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Featured Products</h1>

        {/* GRID */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6
        "
        >
          {products.map((product) => {
            const mainImage =
              product.images?.[0] || "https://via.placeholder.com/300";

            return (
              <div
                key={product.id}
                className="border border-gray-300 dark:border-slate-700 rounded-xl p-3 hover:shadow-lg transition"
              >
                <img
                  src={mainImage}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md"
                />

                <h3 className="text-lg font-semibold mt-3 line-clamp-1 ">
                  {product.title}
                </h3>

                <p className="text-gray-500  text-sm">
                  {product.category?.name}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-semibold text-[#0FABCA]">
                    ${product.price}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline w-1/2"
                  >
                    See More
                  </Link>
                  <button className="p-2 border border-[#0FABCA] rounded-md group hover:bg-[#0FABCA] transition flex items-center gap-2">
                    <IoCartOutline className="text-[#0FABCA] group-hover:text-white text-xl" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeatureProducts;

// This FeatureProducts component fetches a list of products from the backend using a custom Axios hook (useAxios) and displays a selection of featured products in a responsive grid layout. Each product card includes an image, title, category, price, and a link to view more details. The component uses the useEffect hook to fetch the data when it mounts and manages the product data with the useState hook.