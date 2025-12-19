import { useEffect, useState } from "react";

import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

const Category = () => {
  const axios = useAxios();

  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products");
        const data = res.data;
        setAllProducts(data);

        const categorySet = new Set(
          data.map((p) => p.category?.name).filter(Boolean)
        );
        setCategories(["All", ...categorySet]);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, [axios]);

  const filteredProducts = allProducts
    .filter((p) =>
      selectedCategory === "All" ? true : p.category?.name === selectedCategory
    )
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      if (sortOrder === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });

  return (
    <div className="px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 pt-20">Shop by Category</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="input input-bordered"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="range range-primary w-48"
        />

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
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-sm">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="h-48 w-full object-cover"
            />

            <div className="card-body text-center">
              <h2 className="card-title">{product.title}</h2>
              <p>${product.price}</p>

              <div className="flex gap-2 w-full mt-4">
                <Link
                  to={`/products/${product._id}`}
                  className="btn btn-outline w-1/2"
                >
                  See More
                </Link>
                <button className="btn btn-primary w-1/2">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
