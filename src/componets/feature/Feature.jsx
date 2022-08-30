import React from "react";
import "./features.css";

export const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__featites-container__feature">
      <div className="gpt3__featites-container__feature-title">
        <div />
        <h2>{title}</h2>
      </div>
      <div className="gpt3__featites-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};
