import express from "express";
import {
  // TODO Update
  getUser,
  getSearchImage,
  getItems,
  addRemoveItem,
  getArticles,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* Read */
router.get("/:id", verifyToken, getUser);
router.get("/:id/articles", verifyToken, getArticles);
router.get("/:id/items", verifyToken, getItems);

/* Update */
router.patch("/:id/:itemID", verifyToken, addRemoveItem);

export default router;
