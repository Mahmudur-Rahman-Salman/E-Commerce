import React from "react";
import { useState } from "react";

import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddProducts = () => {
  const axios = useAxiosSecure();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    price: "",
    description: "",
    stock: 0,
    images: "",
    categoryId: "",
    categoryName: "",
    categorySlug: "",
    categoryImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      slug: formData.slug,
      price: Number(formData.price),
      description: formData.description,
      stock: Number(formData.stock),
      images: formData.images.split(",").map((img) => img.trim()),
      category: {
        id: Number(formData.categoryId),
        name: formData.categoryName,
        slug: formData.categorySlug,
        image: formData.categoryImage,
      },
    };

    try {
      const res = await axios.post("/products/addProducts", payload, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Product Added:", res.data);
      alert("Product added successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };
  return (
    <div className="min-h-screen pt-30 pb-16 bg-gray-50">
      <div className="max-w-3xl mx-auto p-6 ">
        <h1 className="text-2xl font-bold mb-6">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            name="slug"
            placeholder="Slug"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
          <input
            name="stock"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <input
            name="images"
            placeholder="Image URLs (comma separated)"
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <h2 className="font-semibold mt-4">Category</h2>

          <input
            name="categoryId"
            placeholder="Category ID"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            name="categoryName"
            placeholder="Category Name"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            name="categorySlug"
            placeholder="Category Slug"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            name="categoryImage"
            placeholder="Category Image URL"
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary w-full mt-4">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
