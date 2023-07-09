import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer__container">
        <div className="footer__socialLinks__container">
          <img src={logo} alt="logo" />
          <div className="footer__socialLinks">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="footer__menu">
          <span>Pages</span>
          <p>About Us</p>
          <p>Mentors</p>
          <p>Sessions</p>
          <p>Sign Up</p>
        </div>
        <div className="footer__menu">
          <span>Contact</span>
          <p>123 Main Street City, State 12345</p>
          <p>contact@mentorhub.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </div>
      <p style={{textAlign:"center",fontStyle: "normal",fontWeight: "400", lineHeight: "125%", letterSpacing: "0.2px"}}>© 2023 Mentor Hub. All rights reserved.</p>
    </div>
  );
};

export default Footer;
