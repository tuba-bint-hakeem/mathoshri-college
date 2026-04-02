import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import CreateNotification from "../components/CreateNotification";
import NotificationTable from "../components/NotificationTable";
import { getAllNotifications } from "../services/notificationService";

export default function Home() {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from backend
  const fetchNotifications = async () => {
    try {
      const res = await getAllNotifications();
      setNotifications(res.data || []); // safety
    } catch (error) {
      console.error("Failed to fetch notifications", error);
      setNotifications([]);
    }
  };

  // Load data on page load
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <Navbar />
      <DashboardHeader />

      {/* Create Form */}
      <CreateNotification refreshNotifications={fetchNotifications} />

      {/* Table */}
      <NotificationTable notifications={notifications} />

      
    </>
  );
}
