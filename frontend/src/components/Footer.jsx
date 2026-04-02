import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">

        {/* About */}
        av<div className="footer-box">
          <h3>MPGI Nanded</h3>
          <p>
            Matoshri Pratishthan Group of Institutions is a premier educational
            institution committed to excellence in engineering and management
            education.
          </p>

          <div className="footer-time">
            🕒 Mon-Sat: 9:00 AM - 5:00 PM
          </div>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>📍 Khupsarwadi, Nanded - 431606,<br />Maharashtra, India</p>
          <p>📞 +91 2462 269900</p>
          <p>✉️ info@mpgin.edu.in</p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <Link to="/admin">Admin</Link>
          </ul>
        </div>

      </div>

      {/* Map Section */}
      <div className="footer-map">
        <iframe
          title="MPGI Map"
          src="https://www.google.com/maps?q=Matoshri%20Pratishthan%20Group%20of%20Institutions,%20Nanded&output=embed"
          loading="lazy"
        ></iframe>
      </div>

    </footer>
  );
};

export default Footer;
