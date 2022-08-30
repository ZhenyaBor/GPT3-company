import React from "react";
import "./footer.css";
import logo from "../../assets/Logo.svg";

export const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-title">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3__footer__content">
        <div className="gpt3__footer__content_logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer__content_links">
          <h5>Links</h5>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer__content_links">
          <h5>Company</h5>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Counters</p>
        </div>
        <div className="gpt3__footer__content_links">
          <h5>Get in touch</h5>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>Social Media</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
    </div>
  );
};
