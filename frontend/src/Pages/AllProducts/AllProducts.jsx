import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "../../components/ProductCard/ProductCard";

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
        <h1 className="text-3xl font-bold mt-20 mb-10 text-gray-900">
          All Products
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
           <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;



