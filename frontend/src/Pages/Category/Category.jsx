import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
  // All products from JSON
  const [allProducts, setAllProducts] = useState([]);

  // Categories extracted from products
  const [categories, setCategories] = useState([]);

  // Filters & sorting
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]); // example range
  const [sortOrder, setSortOrder] = useState(""); // "low-to-high" or "newest"
  // const [selectedBrand, setSelectedBrand] = useState("All");

  // Fetch products.json
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setAllProducts(data);

        // Extract unique categories from products
        const categorySet = new Set(data.map((p) => p.category.name));
        setCategories(["All", ...Array.from(categorySet)]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Compute filtered products dynamically (no separate state)
  const filteredProducts = allProducts
    .filter((p) =>
      selectedCategory !== "All" ? p.category.name === selectedCategory : true
    )
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    // .filter((p) => (selectedBrand !== "All" ? p.brand === selectedBrand : true))
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      if (sortOrder === "newest")
        return new Date(b.creationAt) - new Date(a.creationAt);
      return 0;
    });

  return (
    <div>
      <div className="px-4 py-16">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6 pt-20">Shop by Category</h1>

        {/* Horizontal Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 items-center">
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input input-bordered"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="range range-primary w-48"
          />
          <span>Max Price: ${priceRange[1]}</span>

          {/* Sort */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="input input-bordered"
          >
            <option value="">Sort By</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>

          {/* Brand filter */}
          {/* <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="input input-bordered"
          > */}
            {/* <option value="All">All Brands</option> */}
            {/* Dynamically add brand options if available */}
          {/* </select> */}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-sm rounded-lg overflow-hidden"
            >
              <figure className="px-4 pt-4">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="rounded-lg object-cover w-full h-48"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.title}</h2>
                <p>${product.price}</p>
                <div className="mt-4 flex gap-2 w-full">
                  <a
                    href={`/products/${product.id}`}
                    className="btn btn-outline w-1/2"
                  >
                    See More
                  </a>
                  <button className="btn btn-primary w-1/2 flex items-center justify-center gap-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
