import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SchoolDashboard.css";

const SchoolDashboard = () => {
  const navigate = useNavigate();

  return (
    <nav className="school-dashboard">
      <ul className="nav-menu">

        <li>
          <span className="action-btn active" onClick={() => navigate("/")}>
            Home
          </span>
        </li>

        {/* Departments */}
        <li className="nav-item">
          <span className="action-btn">
            Departments <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to="civil">Civil Engineering</Link>
            <Link to="/cse">Computer Science Engineering</Link>
            <Link to="/electrical">Electrical Engineering</Link>
            <Link to="/mechanical">Mechanical & Automation Engineering</Link>
            <Link to="/etc">Electronics & Telecommunication Engineering</Link>
            <Link to="/ai-ds">AI & Data Science</Link>
            <Link to="/aiml">CSE (AIML)</Link>
            <Link to="/basic">Basic Sciences & Humanities (FE)</Link>
            <Link to="/tpo">Training & Placement</Link>
          </div>
        </li>

        {/* Cells & Committees */}
        <li className="nav-item">
          <span className="action-btn">
            Cells & Committees <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to="/cells/anti-ragging-committee">Anti Ragging Committee</Link>
            <Link to="/cells/anti-ragging-squad">Anti Ragging Squad</Link>
            <Link to="/cells/women-empowerment">Women Empowerment Committee</Link>
            <Link to="/cells/governing-body">Governing Body</Link>
            <Link to="/cells/faculty-grievance">Faculty Grievance Redressal Cell</Link>
            <Link to="/cells/student-counselling">Student Counselling Cell</Link>
            <Link to="/cells/industry-liaison">Industry Liaison Committee</Link>
            <Link to="/cells/library">Library Committee</Link>
            <Link to="/cells/remedial-coaching">Remedial Coaching Cell</Link>
            <Link to="/cells/training-placement">Training & Placement Cell</Link>
          </div>
        </li>

        {/* Admission */}
        <li className="nav-item">
          <span className="action-btn">
            Admission <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to="/admission/courses">Courses</Link>
            <Link to="/admission/fee-structure">Fee Structure</Link>
            <Link to="/admission/student">Student</Link>
            <Link to="/admission/administration">Administration</Link>
            <Link to="/admission/undertaking">Undertaking</Link>
            <Link to="/admission/brochure">Information Brochure 2025–26</Link>
            <Link to="/admission/sbi">SBI Collect</Link>
            <Link to="/admission/process">Admission Process 2025–26</Link>
          </div>
        </li>

        {/* Facilities */}
        <li className="nav-item">
          <span className="action-btn">
            Facilities <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to="/facilities/classrooms">Classrooms</Link>
            <Link to="/facilities/hostel">Girls and Boys Hostel</Link>
            <Link to="/facilities/library">Library</Link>
            <Link to="/facilities/virtual-labs">Virtual Labs</Link>
            <Link to="/facilities/indoor-sports">Indoor Sports</Link>
            <Link to="/facilities/outdoor-sports">Outdoor Sports</Link>
            <Link to="/facilities/bus">Bus Facilities</Link>
            <Link to="/facilities/wifi">WiFi Enabled Campus</Link>
          </div>
        </li>

        {/* Alumni */}
        <li className="nav-item">
          <span className="action-btn">
            Alumni <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link to="/alumni/registration">Alumni Registration</Link>
            <Link to="/alumni/esteemed">Esteemed Alumni</Link>
          </div>
        </li>

        <li><span className="action-btn">Activities / Events</span></li>
        <li><span className="action-btn">Campus</span></li>
        <li><span className="action-btn">Quick Links</span></li>
        <li><span className="action-btn">Download</span></li>
        <li><span className="action-btn">Suggestion Box</span></li>
        <li><span className="action-btn">Contact</span></li>

      </ul>
    </nav>
  );
};

export default SchoolDashboard;
