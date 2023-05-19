import express from "express";
import { getArticle, getUserArticles } from "../controllers/articles.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */
router.get("/", verifyToken, getArticle);
router.get("/:userId/articles", verifyToken, getUserArticles);

export default router;
