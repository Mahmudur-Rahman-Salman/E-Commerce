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
router.get("/", getAllProducts); 
router.get("/:productId", getProductById); 

// ADMIN ROUTES
router.post("/addProducts", createProduct); 
router.patch("/:updateProductById", updateProduct); 
router.delete("/:deleteProductById", deleteProduct);
  
export default router;



// Product Routes     