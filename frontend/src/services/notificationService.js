// src/services/notificationService.js
import API from "../api/axios";

// Get all notifications
export const getAllNotifications = () => API.get("/notifications");

// Get notifications for a specific college
export const getNotificationsByCollege = (collegeId) =>
  API.get(`/notifications?collegeId=${collegeId}`);

// Create a new notification
export const createNotification = (data) => API.post("/notifications", data);

// Update an existing notification
export const updateNotification = (id, data) =>
  API.put(`/notifications/${id}`, data);

// Delete a notification
export const deleteNotification = (id) =>
  API.delete(`/notifications/${id}`);
