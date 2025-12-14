import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();
// PUBLIC ROUTES
router.get("/", getAllProducts); // GET /api/products
router.get("/:productId", getProductById); // GET /api/products/:productId

// ADMIN ROUTES
router.post("/", createProduct); // POST /api/products
router.patch("/:productId", updateProduct); // PATCH /api/products/:productId
router.delete("/:productId", deleteProduct);

export default router;
