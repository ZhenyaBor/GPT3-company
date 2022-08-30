import React from "react";
import "./posibility.css";
import posibility from "../../assets/Feature Image.png";

export const Posibility = () => {
  return (
    <div className="gpt3__posibility section-contauner">
      <div className="gpt3__posibility-image">
        <img src={posibility} alt="" />
      </div>
      <div className="pt3__posibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};
