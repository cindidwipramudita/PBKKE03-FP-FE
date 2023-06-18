import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/app.css";

const Menu = () => {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <a href="index.php">Home</a>
          </li>
          <li>
            <Link href="/login">Make Reservation</Link>
          </li>
          <li>
            <a href="employee/emp-login.php">Employee Login</a>
          </li>
          <li>
            <a href="admin/emp-login.php">Admin Login</a>
          </li>
        </ul>
        <a href="#" className="close">
          Close
        </a>
      </div>
    </nav>
  );
};

export default Menu;
