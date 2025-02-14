import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Contact Us</h1>
        <p>Email: cafe@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
