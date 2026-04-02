import Notification from "../models/notificationModel.js";

// CREATE
export const createNotificationController = async (req, res) => {
  try {
    await Notification.create(req.body);
    res.status(201).json({ message: "Notification created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Notification deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE (EDIT)
export const updateNotification = async (req, res) => {
  try {
    const updated = await Notification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET BY COLLEGE
export const getNotificationsByCollege = async (req, res) => {
  try {
    const college = req.params.college;

    const notifications = await Notification.find({ college })
      .sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

