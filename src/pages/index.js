import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css"; // Import CSS for styling

const Home = () => (
  <main className="home">
    <Navbar />
    
    {/* Hero Section with Background Image */}
    <section className="hero">
      <h1>About Us</h1>
      <p>Best Coffee In Town</p>
    </section>

    {/* Body Content */}
    <section className="content">
      <h2></h2>
      <p>
        La Casa Restaurant opened its doors in 1967 and blossomed into a Sonoma landmark known for its fine Mexican food, great margaritas, fun and entertainment.<br />
        Set in the Wine Country, this lively restaurant has been family owned and operated since the day it opened with that special quality that makes it a favorite gathering place for visitors and locals alike.<br />
        During the summer you are likely to find a Latin soloist strolling through the dining room enchanting guests with traditional music.<br />
        La Casa also features garden patio dining set in the charming El Paseo courtyard reminiscent of old Mexico.
      </p>  
      </section>

    <Footer />
  </main>
);

export default Home;
