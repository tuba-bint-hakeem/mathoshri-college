import React, { useEffect, useState } from "react";
import { getNotificationsByCollege } from "../services/notificationService";
import "./ManagementContained.css";

const ManagementContained = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const res = await getNotificationsByCollege("management");
        setNotifications(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadNotifications();
  }, []);

  return (
    <div className="management-contained">

      {/* ================= LEFT SIDEBAR ================= */}
      <div className="left-sidebar">
        <ul className="sidebar-menu">
          <li className="active">Home</li>
          <li>Vision &amp; Mission</li>
          <li>Dean</li>
          <li>Placements</li>
          <li>IQAC</li>
        </ul>
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="main-content">
        <h2>Welcome to School of Management</h2>
        <hr />

        <h3>About Us</h3>
        <p>
          The School of Management at Matoshri Pratishthan Group of Institutions
          (MPGI), Nanded, is a leading business school established in 2010.
          It offers industry-aligned programs that build leadership, strategic
          thinking, and entrepreneurial skills among students.
        </p>

        <h3>Key Highlights:</h3>
        <ul>
          <li>Approved by AICTE, New Delhi &amp; Affiliated to SRTMUN, Nanded</li>
          <li>NAAC Accreditation: B+ Grade</li>
          <li>Courses Offered: MBA (Dual Specialization), BBA</li>
          <li>Faculty: 30+ with academic and industry backgrounds</li>
          <li>Annual Intake: 180+ students</li>
          <li>Placement Support: Strong ties with 100+ companies</li>
        </ul>

        <h3>Infrastructure</h3>
        <p>Our business school provides:</p>
        <ul>
          <li>Smart Classrooms with audio-visual technology</li>
          <li>Case Study &amp; Group Discussion Halls</li>
          <li>Digital Library with access to journals &amp; e-resources</li>
          <li>Seminar Hall &amp; Conference Facilities</li>
          <li>Dedicated Career Development Cell</li>
          <li>Wi-Fi Enabled Campus</li>
        </ul>
      </div>

      {/* ================= RIGHT SIDEBAR (NOTIFICATIONS) ================= */}
      <div className="right-sidebar">
        <div className="notice-card">
          <h4>News/Events/Notices</h4>

          {notifications.length === 0 && (
            <div className="notice-item">
              <p>No notifications available</p>
            </div>
          )}

          {notifications.map((n) => (
            <div key={n._id} className="notice-item">
              <strong>{n.title}</strong>
              <p>{n.message}</p>

              {n.linkUrl && (
                <button
                  onClick={() => window.open(n.linkUrl, "_blank")}
                >
                  {n.linkText || "Read More"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ManagementContained;
