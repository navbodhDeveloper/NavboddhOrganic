import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaShoppingCart, FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }} onClick={closeMenu}>
        <div className="logo">
          <FaLeaf className="leaf-icon" />
          <h1>Navbodh Organic</h1>
        </div>
      </Link>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li onClick={closeMenu}><Link to="/" className="nav-item">Home</Link></li>
        <li onClick={closeMenu}><Link to="/products" className="nav-item">Products</Link></li>
        <li onClick={closeMenu}><Link to="/cart" className="nav-item">Cart</Link></li>
        <li onClick={closeMenu}><Link to="/login" className="nav-item">Login</Link></li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <Link to="/login"><FaUserAlt className="icon" /></Link>
        <Link to="/cart"><FaShoppingCart className="icon" /></Link>
      </div>
    </nav>
  );
}

export default Navbar;
