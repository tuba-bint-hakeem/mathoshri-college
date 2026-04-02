import express from "express";
import {
  createNotificationController,
  getNotifications,
  deleteNotification,
  updateNotification,
    getNotificationsByCollege,   // ✅ ADD
} from "../controllers/notificationController.js";

const router = express.Router();

router.post("/", createNotificationController);     // ✅ FIX
router.get("/", getNotifications);
router.get("/college/:college", getNotificationsByCollege);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);



export default router;

