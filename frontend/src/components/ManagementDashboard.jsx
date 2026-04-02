import React from "react";
import "./ManagementDashboard.css";

const ManagementDashboard = () => {
  return (
    <div className="management-dashboard">
      <nav className="menu-bar">
        <ul className="menu-list">
          <li className="active"><a href="#">Home</a></li>

          <li className="has-arrow"><a href="#">Departments</a></li>
          <li className="has-arrow"><a href="#">Cells & Committees</a></li>
          <li className="has-arrow"><a href="#">Admission</a></li>
          <li className="has-arrow"><a href="#">Facilities</a></li>
          <li className="has-arrow"><a href="#">Alumni</a></li>
          <li className="has-arrow"><a href="#">Activities/Events</a></li>

          <li><a href="#">Campus</a></li>

          <li className="has-arrow"><a href="#">Quick Links</a></li>
          <li className="has-arrow"><a href="#">Download</a></li>
          <li className="has-arrow"><a href="#">Suggestion Box</a></li>

          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ManagementDashboard;
