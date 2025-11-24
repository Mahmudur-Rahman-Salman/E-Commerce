import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((products) => {
        const seenNames = new Set();
        const uniqueCategories = [];

        products.forEach((product) => {
          const cat = product.category;
          if (cat && !seenNames.has(cat.name)) {
            seenNames.add(cat.name);
            uniqueCategories.push({
              name: cat.name,
              image: cat.image,
              slug: cat.slug,
            });
          }
        });

        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <section className="py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Shop by Category</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-semibold">{cat.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
