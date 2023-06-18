import React from "react";
import "../assets/css/app.css";

const Contact = () => {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <ul className="contact">
          <li className="icon solid fa-home">
            Online Railway Reservation System
            <br />
            PHP Project
            <br />
          </li>
          <li className="icon solid fa-phone">(+254) 127-0000</li>
          <li className="icon solid fa-envelope">
            <a href="#">mail@orrs.com</a>
          </li>
          <li className="icon brands fa-twitter">
            <a href="#">twitter.com/Orrs</a>
          </li>
          <li className="icon brands fa-facebook-f">
            <a href="#">facebook.com/orrs</a>
          </li>
          <li className="icon brands fa-instagram">
            <a href="#">instagram.com/orrs</a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Online Railway Reservation System.</li>
          <li>Developed By: Martin Mbithi Nzilani</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
