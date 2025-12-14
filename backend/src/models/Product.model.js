import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    slug: String,
    image: String,
    creationAt: Date,
    updatedAt: Date,
  },
  { _id: false }
); // disable _id for sub-document

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: String,
    price: { type: Number, required: true },
    description: String,
    stock: { type: Number, default: 0 },
    images: [String],
    category: categorySchema,
  },
  { timestamps: true } // auto create createdAt and updatedAt
);

const Product = mongoose.model("Product", productSchema, "productsCollection");
export default Product;
