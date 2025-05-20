import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller";

const router = express.Router();

// func to handle POST requests to /api/products
router.post("/", createProduct);

// func to handle DELETE requests to /api/products/:id
router.delete("/:id", deleteProduct);

// func to handle GET requests to /api/products ALL PRODUCTS
router.get("/", getProducts);

router.put("/:id", updateProduct);

export default router;
