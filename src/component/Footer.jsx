import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";
import "../App.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <FaLeaf className="leaf" />
          <h2>Navbodh Organic</h2>
        </div>
        <div className="social">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      <p>© 2025 Navbodh Organic. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
