import express from "express"
import { verifyToken } from "../utils/verifyUser.js"
import { upload } from "../utils/upload.js"
import {
  create,
  deletepost,
  getPosts,
  updatepost,
} from "../controllers/post.controller.js"

const router = express.Router()

// router.post("/create", verifyToken, create)
router.post("/create",verifyToken, upload.single("image"), create)
router.get("/getposts", getPosts)
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost)
router.put("/updatepost/:postId/:userId", verifyToken,upload.single("image"), updatepost)

export default router
