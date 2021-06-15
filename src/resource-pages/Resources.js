import React from "react";
import datafile from "./datafile";
import { Link } from "react-router-dom";
import "./resourceStyle.css";

const Resources = () => {
  const listing = datafile.map((item, index) => {
    return (
      <div key={index} className="resource-list">
        <img src={item.imgUrl} alt={item.title} />

        <div>
          <h4>{item.desc}</h4>
          <p className="overflow-ellipsis">{item.content}</p>
          <Link to={`/resource/${item.postId}`} key={index}>
            READ MORE
          </Link>
        </div>

        <div className="resource-tags">
          <div id="resource-category">Category: {item.category}</div>
          <div id="resource-type">Type: {item.type}</div>
          <div id="resource-score">Post Score: {item.postScore}</div>
        </div>

        <hr />
      </div>
    );
  });
  return (
    <div>
      <h2>WELCOME</h2>
      <hr />
      {listing}
    </div>
  );
};

export default Resources;
