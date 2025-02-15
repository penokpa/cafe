import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../images/cafelogo.jpg";

const Navbar = () => {
  // Step 1: Add state to handle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Step 2: Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Cafe logo" className="logo"/>
        </Link>
      </div>
      {/* <h2>Cafe Delight</h2> */}
      {/* Step 3: Hamburger button for mobile view */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Step 4: Conditional rendering of menu */}
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
