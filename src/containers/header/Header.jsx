import React from "react";
import "./header.css";
import headerimg from "../../assets/Header Illustration.png";
import people from "../../assets/Group 81.png";
export const Header = () => {
  return (
    <div className="gpt3-header section-padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text texth1">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <div className="gpt3-header-text-header">
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className="gpt3-header-form-box">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="gpt3-header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3-header-img">
        <img src={headerimg} alt="" />
      </div>
    </div>
  );
};
