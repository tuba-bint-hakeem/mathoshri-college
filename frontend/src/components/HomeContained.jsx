import React from "react";
import "./HomeContained.css";

export default function HomeContained() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-item inactive">President</div>
        <div className="sidebar-item active">Secretary</div>
        <div className="sidebar-item inactive">Managing Director</div>
        <div className="sidebar-item active">Board of Directors</div>
        <div className="sidebar-item active">Vision & Mission</div>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="profile-header">
          <div className="profile-texts">
            <h2 className="profile-title">
              Sow. Jayshree Kamaji Pawar's Profile
            </h2>

            <p className="profile-text">From, President's Desk</p>

            <p className="profile-text">
              It gives me immense pleasure to welcome you to the Matoshri
              Pratishthan Group of Institutions (MPGI) family. As President, I
              take great pride in our institution's journey of transforming
              young minds into competent professionals since our establishment
              in 2009.
            </p>

            <p className="profile-text">
              Our vision extends beyond conventional education - we aim to
              create an ecosystem that nurtures innovation, critical thinking,
              and social responsibility. With world-class infrastructure
              including: 25+ advanced laboratories, 10,000+ sq.ft. library with
              digital resources, incubation center for startups, sports complex
              and wellness center.
            </p>

            <p className="profile-text">
              We've consistently maintained: 95% placement record over last 5
              years, 50+ industry collaborations, 15+ international academic
              partnerships, 100+ research publications annually.
            </p>

            <p className="profile-text">
              Our faculty comprises 80% PhD holders with an average of 15 years
              of experience. The MPGI advantage lies in our unique
              "Industry-Integrated Curriculum" including mandatory internships
              from 2nd year, live projects, certification programs, and
              personality development workshops.
            </p>

            <p className="profile-text">
              I invite you to embark on this transformative educational journey
              with us, where we don't just create graduates, but future leaders
              and change-makers.
            </p>

            <p className="profile-signature">
              – Sow. Jayshree Kamaji Pawar
            </p>
          </div>

          <img
            src="https://www.mpgi.ac.in/assets/President%20Jayshree%20Kamaji%20Pawar-CoEkI11S.jpg"
            alt="Sow. Jayshree Kamaji Pawar"
            className="profile-image"
          />
        </div>

        <div className="profile-role">President</div>
      </div>
    </div>
  );
}
