import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../Controllers/product.controller.js";
const router = express.Router();

router.get('/',getAllProducts);

router.post('/', createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;