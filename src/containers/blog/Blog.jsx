import React from "react";
import "./blog.css";
import { Articl } from "../../componets/articl/Articl";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";

export const Blog = () => {
  return (
    <div className="gpt3__blog section-contauner">
      <div className="gpt3__blog-heading">
        <h2 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h2>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Articl
            imgUrl={blog1}
            data={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Articl
            imgUrl={blog5}
            data={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Articl
            imgUrl={blog4}
            data={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Articl
            imgUrl={blog3}
            data={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
          <Articl
            imgUrl={blog2}
            data={"Sep 26, 2021"}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          />
        </div>
      </div>
    </div>
  );
};
