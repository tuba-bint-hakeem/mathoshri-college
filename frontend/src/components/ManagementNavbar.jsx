import React from "react";
import "./ManagementNavbar.css";
import logo from "../images/logo.png"; 

const ManagementNavbar = () => {
  return (
    <div className="management-navbar">
      <div className="navbar-content">
        <img src={logo} alt="School Logo" className="navbar-logo" />
        <h1 className="navbar-title">School of Management</h1>
      </div>
    </div>
  );
};

export default ManagementNavbar;
