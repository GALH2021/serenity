import React from "react";
import datafile from "./datafile";
import { Link } from "react-router-dom";
import "./resourceStyle.css";

const Resources = ({ resourceData }) => {
  //console.log(resourceData);

  const listing = resourceData.map((item, index) => {
    return (
      <Link to={`/resource/${item.id}`} key={index}>
        <div key={index} className="resource-list">
          <img src={item.imgUrl} alt={item.desc} />

          <div>
            <h4>{item.desc}</h4>
            <p className="overflow-fade">{item.content}</p>
          </div>
        </div>
      </Link>
    );
  });

  return listing.length > 0 ? (
    <div className="resources">
      <h2>Resources</h2>
      <h3>Laila's Library</h3>
      {listing}
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Resources;
