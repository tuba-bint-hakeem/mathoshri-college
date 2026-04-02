import React from "react";
import "./SchoolNavbar.css";
import logo from "../images/logo.png";

const SchoolNavbar = () => {
  return (
    <header className="school-navbar">
      <div className="school-navbar-content">
        <img src={logo} alt="School Logo" className="school-navbar-logo" />
        <span className="school-navbar-title">School of Engineering</span>
      </div>
    </header>
  );
};

export default SchoolNavbar;
