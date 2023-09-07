import express from "express";
import { getFavorites, deleteFavorites, addFavorites } from "../controller/favorites.js";

const router = express.Router()


router.get("/favorites", getFavorites)

router.post("/favorites", addFavorites)

router.delete("/favorites:id", deleteFavorites)

export default router