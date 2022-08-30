import React from "react";
import "./articl.css";

export const Articl = ({ imgUrl, data, title }) => {
  return (
    <div className="gpt3__blog-container_articl">
      <div className="gpt3__blog-container_articl-image">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="gpt3__blog-container_articl-content">
        <div>
          <p>{data}</p>
          <h2>{title}</h2>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};
