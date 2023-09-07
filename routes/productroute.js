import express from "express";
import { addProducts, deleteProduct, getProducts, updateProduct,getProductsbyId } from "../controller/product.js";

const router = express.Router()


router.get("/products", getProducts)

router.get("/products/:id", getProductsbyId)

router.post("/products", addProducts)

router.put("/products:id", updateProduct)

router.delete("/products:id", deleteProduct)

export default router