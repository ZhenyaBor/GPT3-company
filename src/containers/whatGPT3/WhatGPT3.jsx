import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../componets/feature";

export const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={"What is GPT-3"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </div>
      <div className="gpt3__whatgpt3-header">
        <h2 className="gpt3__whatgpt3-text gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p className="gpt3__whatgpt3-subtitle">Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-box">
        <Feature
          title={"Chatbots"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          }
        />
        <Feature
          title={"Knowledgebase"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
        <Feature
          title={"Education"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
      </div>
    </div>
  );
};
