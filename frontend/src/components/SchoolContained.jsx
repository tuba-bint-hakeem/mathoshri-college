import React from "react";
import "./SchoolContained.css";

const SchoolContained = () => {
  return (
    <div className="page">
      {/* LEFT SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-header active">Home</div>
        <div className="sidebar-item">Vision & Mission</div>
        <div className="sidebar-item active-item">Principal</div>
        <div className="sidebar-item">Placements</div>
        <div className="sidebar-item">IQAC</div>
        <div className="sidebar-item">Innovation & Incubation Centre</div>
        <div className="sidebar-item">SWAYAM-NPTEL</div>
      </div>

      {/* CENTER CONTENT */}
      <div className="content">
        <h2 className="title">Welcome to School of Engineering</h2>

        <h4>About Us</h4>
        <p>
          The School of Engineering at Matoshri Pratishthan Group of Institutions
          (MPGI), Nanded is a premier engineering institute established in 2009 to
          provide an ideal environment for technical education and research.
          The institute is a vibrant and innovative centre for education to
          develop a cadre of socially responsive managers, technocrats,
          entrepreneurs and professionals.
        </p>

        <h4>Key Highlights:</h4>
        <ul className="highlight-list">
          <li>Recognized by AICTE, DTE</li>
          <li>Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere</li>
          <li>Well maintained clean and green campus over land of 9.25 acres</li>
          <li>ISO 9001:2008 certified</li>
          <li>Independent building for each institute</li>
          <li>State of the art laboratories with latest equipments</li>
          <li>Digital classrooms with virtual laboratories</li>
          <li>NPTEL Nodal Centre</li>
          <li>Virtual laboratory in coordination with IIT, Mumbai</li>
          <li>MOUs with different industries and institutes</li>
          <li>Advanced language lab to nourish soft skills</li>
          <li>Training and Placement Cell</li>
          <li>Industrial visits, parents meet, alumni meet</li>
          <li>Faculty and staff young, dynamic, qualified and experienced</li>
          <li>Expert lecture series and seminars on recent technological developments</li>
          <li>Internal Quality Assurance Cell (IQAC)</li>
          <li>Central library with 36000+ references and text books with e-journals</li>
          <li>Personality development and career guidance cell</li>
          <li>Well equipped AC Auditorium of 700 capacity</li>
          <li>Broadband internet service and Wi-Fi enabled campus</li>
          <li>Separate hostel facility for boys and girls</li>
          <li>First aid facility, canteen facility, transportation facility</li>
          <li>Playground for outdoor games and indoor games</li>
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="panel-header">News/Events/Notices</div>

        <div className="notice">
          <span className="tag">Placement</span>
          <p>
            We are proud to announce that our Final Year Engineering students
            have been selected in the QSpiders Campus Recruitment Drive.
          </p>
          <span className="date">Jun 03, 2023</span>
        </div>

        <div className="notice">
          <span className="tag">Placement</span>
          <h5>ID Card Mandatory on Campus</h5>
          <p>Students must carry ID cards at all times while on campus.</p>
          <a href="/">Read Guidelines</a>
        </div>

        <div className="notice">
          <span className="tag">Career Guidance</span>
          <h5>Career Guidance Session</h5>
          <p>
            Career Guidance Session held in Kusum Auditorium Hall, MPGI,
            Nanded.
          </p>
          <span className="date">Jun 01, 2023</span>
        </div>

        <div className="notice">
          <span className="tag">Placement</span>
          <p>
            QSpiders Placement Success – Congratulations to all selected
            students.
          </p>
          <span className="date">May 25, 2023</span>
        </div>
      </div>
    </div>
  );
};

export default SchoolContained;
