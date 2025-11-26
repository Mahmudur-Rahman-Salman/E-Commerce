import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Fetch products.json from public folder
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        // For now, just take first 8 products as featured
        setAllProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  return (
    <>
      <section className="py-16 px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold mt-20 mb-10 text-gray-900">All Products</h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 w-full shadow-sm hover:shadow-md transition"
            >
              <figure className="px-5 pt-5">
                <img
                  src={
                    Array.isArray(product.images)
                      ? product.images[0]
                      : product.images
                  }
                  alt={product.title}
                  className="rounded-xl h-48 object-cover w-full"
                />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg">{product.title}</h2>
                <p className="text-gray-500 text-sm">
                  {product.category?.name}
                </p>

                <p className="text-lg font-semibold text-black">
                  ${product.price}
                </p>

                <button className="btn btn-primary mt-3 flex items-center gap-2">
                  <FiShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
