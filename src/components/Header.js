import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import HeroImage from "../assets/img/hero-bg.jpg";

const Header = () => {
  return (
    <header id="header" className="fixed-top" style={{ margin: "0" }}>
      <div className="container d-flex align-items-center">
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="#about" className="nav-link scrollto">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="#services" className="nav-link scrollto">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="#contact" className="nav-link scrollto">
                Kontak
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <h1 className="logo me-auto flex-grow-1 text-end">
          <Link to="/">tiketkita</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
