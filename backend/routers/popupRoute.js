
import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  getPopups,
  createPopup,
  uploadPopup,
  activatePopup,
  deletePopup,
} from "../controllers/popupController.js";

const router = express.Router();

router.get("/", getPopups);
router.post("/", createPopup);

// 🔥 THIS IS THE IMPORTANT LINE
router.post("/upload", upload.single("image"), uploadPopup);

router.put("/:id", activatePopup);
router.delete("/:id", deletePopup);

export default router;
