import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="navbar">
    <h2>Cafe Delight</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
