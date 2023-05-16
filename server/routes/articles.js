import express from "express";
import { getArticle } from "../controllers/articles.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */
router.get("/articles", verifyToken, getArticle);

export default router;
