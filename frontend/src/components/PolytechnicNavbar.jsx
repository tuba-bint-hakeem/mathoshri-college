import React from "react";
import "./PolytechnicNavbar.css";

import logo from "../images/logo.png"; // apna logo path yahan daale

const PolytechnicNavbar = () => {
  return (
    <nav className="polytechnic-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Vishwabharati Logo" className="navbar-logo" />
        </div>

        <div className="navbar-center">
          <h1>Vishwabharati Polytechnic Institute</h1>
        </div>

        <div className="navbar-right">
          {/* optional right section */}
        </div>
      </div>
    </nav>
  );
};

export default PolytechnicNavbar;
