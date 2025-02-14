import React from "react";

const Footer = ()=>{
  return(
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 10:00 PM</p>
        </div>
        <div className="footer-section">
          <h3>Opening Days</h3>
          <p>We're Open All Days of the Week!</p>

        </div>
      </div>
      <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Cafe Lacasa. All Rights Reserved.</p>      </div>
    </footer>
  );
};
export default Footer;
