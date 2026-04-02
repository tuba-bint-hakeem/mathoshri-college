import express from "express";
import {
  addPhoto,
  getPhotos,
  deletePhoto,
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/", addPhoto);
router.get("/", getPhotos);
router.delete("/:id", deletePhoto);

export default router;
