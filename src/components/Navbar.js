// import React from "react";
// import { Link } from "gatsby";

// const Navbar = () => (
//   <nav className="navbar">
//     <h2>Cafe Delight</h2>
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/menu">Menu</Link>
//       <Link to="/contact">Contact</Link>
//     </div>
//   </nav>
// );

// export default Navbar;
import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  // Step 1: Add state to handle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Step 2: Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h2>Cafe Delight</h2>
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
