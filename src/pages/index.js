import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css"; // Import CSS for styling

const Home = () => (
  <main className="home">
    <Navbar />
    
    {/* Hero Section with Background Image */}
    <section className="hero">
      <h1>Welcome to Our Cafe</h1>
      <p>Enjoy the best coffee and meals in town.</p>
    </section>

    {/* Body Content */}
    <section className="content">
      <h2>Our Special Dishes</h2>
      <p>We serve fresh and delicious food every day. Visit us to experience the taste!</p>
    </section>

    <Footer />
  </main>
);

export default Home;
