import React, { useEffect, useState } from "react";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products.json from public folder
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        // For now, just take first 8 products as featured
        setProducts(data.slice(0, 8));
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <>
      <section className="py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={product.images}
                alt={product.name}
                className="w-40 h-40 object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700 font-medium mb-2">${product.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeatureProducts;
