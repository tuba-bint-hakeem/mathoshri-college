import React, { useState } from "react";
import "./CivilContained.css";
import hodCivil from "../images/Civil-1.png";

const CivilContained = () => {
  const [section, setSection] = useState("profile"); // 👈 DEFAULT PROFILE

  return (
    <div className="department-container">
      <aside className="sidebar">
        <ul>
          <li onClick={() => setSection("profile")}>Profile</li>
          <li onClick={() => setSection("overview")}>Overview</li>
          <li onClick={() => setSection("faculty")}>Faculty</li>
          <li onClick={() => setSection("gallery")}>Gallery</li>
          <li onClick={() => setSection("labs")}>Labs</li>
        </ul>
      </aside>

      <main className="content">
        {section === "profile" && (
          <>
            <h2>Civil Engineering</h2>
            <img src={hodCivil} alt="HOD" />
            <p>Welcome to Civil Engineering Department</p>
          </>
        )}

        {section === "overview" && <h2>About Civil Department</h2>}
        {section === "faculty" && <h2>Faculty List</h2>}
        {section === "gallery" && <h2>Gallery</h2>}
        {section === "labs" && <h2>Labs</h2>}
      </main>
    </div>
  );
};

export default CivilContained;
