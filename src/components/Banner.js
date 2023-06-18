import React from "react";
import "../assets/css/app.css";

const Banner = () => {
  return (
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon solid fa-train"></span>
        </div>
        <h2>Online Railway Reservation System</h2>
        <p>
          Best, Simple, and User Friendly Way To Reserve Train Tickets
          Effectively
        </p>
      </div>
    </section>
  );
};

export default Banner;
