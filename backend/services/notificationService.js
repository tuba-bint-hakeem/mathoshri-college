import Notification from "../models/notificationModel.js";
import axios from "../api/axios";
export const createNotification = async (data) => {
  try {
    await Notification.create(data);
    return "success";
  } catch (error) {
    console.error("CREATE ERROR:", error.message);
    return "error";
  }
};

export const getAllNotifications = async () => {
  return await Notification.find().sort({ createdAt: -1 });
};


export const getNotificationsByCollege = (college) => {
  return axios.get(`/notifications/college/${college}`);
};
