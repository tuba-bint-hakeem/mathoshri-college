import React from "react";
import "./PolytechniDashboard.css";

const PolytechniDashboard = () => {
  return (
    <div className="dashboard-navbar">
      <ul className="dashboard-menu">
        <li className="active">Home</li>

        <li>
          Departments <span className="arrow">▼</span>
        </li>

        <li>
          Cells & Committees <span className="arrow">▼</span>
        </li>

        <li>
          Admission <span className="arrow">▼</span>
        </li>

        <li>
          Facilities <span className="arrow">▼</span>
        </li>

        <li>
          Alumni <span className="arrow">▼</span>
        </li>

        <li>
          Activities/Events <span className="arrow">▼</span>
        </li>

        <li>Campus</li>

        <li>
          Quick Links <span className="arrow">▼</span>
        </li>

        <li>
          Download <span className="arrow">▼</span>
        </li>

        <li>
          Suggestion Box <span className="arrow">▼</span>
        </li>

        <li>Contact</li>
      </ul>
    </div>
  );
};

export default PolytechniDashboard;
