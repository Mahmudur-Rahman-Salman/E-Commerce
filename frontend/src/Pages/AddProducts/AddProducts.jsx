import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Swal } from "sweetalert2";

const AddProducts = () => {
  const axios = useAxios();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      title: formData.title,
      price: Number(formData.price),
      description: formData.description,
      images: [formData.image],
      category: formData.category,
      stock: Number(formData.stock),
    };

    try {
      await axios.post("/products", product);

      Swal.fire({
        icon: "success",
        title: "Product Added",
        text: "Product saved to database",
      });

      setFormData({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
        stock: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Product not saved",
      });
      console.error(error);
    }
  };
  return (
    <div className="max-w-xl mx-auto pt-24 px-4">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="input input-bordered w-full"
          required
        />

        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="input input-bordered w-full"
          required
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <input
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="input input-bordered w-full"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        />

        <button className="btn btn-primary w-full">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
