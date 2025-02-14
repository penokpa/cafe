// import React from "react";
// import { Link } from "gatsby";

// const Menu =()=>(
// <main>
//     <h1>Our Menu</h1>
//     <p>Check out our delicious meals</p>
//     <Link to="/">Go Back</Link>
// </main>
// );
// export default Menu;
import React from "react";
import { Link } from "gatsby";
import Footer from "../components/Footer";

const Menu = () => {
  // Array of menu items
  const menuItems = [
    { name: "Espresso", description: "Strong black coffee", price: "$3.00" },
    { name: "Cappuccino", description: "Coffee with steamed milk", price: "$4.00" },
    { name: "Latte", description: "Espresso with steamed milk and a little foam", price: "$4.50" },
    { name: "Blueberry Muffin", description: "Freshly baked muffin", price: "$2.50" },
    { name: "Cheese Sandwich", description: "Grilled sandwich with cheese", price: "$5.00" },
  ];

  return (
    <main>
      <h1>Our Menu</h1>
      <p></p>
      <ul>
        {/* Loop through menu items and display them */}
        {menuItems.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
      <Footer />
    </main>
  );
};

export default Menu;
