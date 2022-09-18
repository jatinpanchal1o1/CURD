import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getPost,
} from "../controllers/postCon.js";

const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", deletePost);
router.patch("/:id", editPost);

export default router;
