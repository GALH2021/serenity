import React from "react";
import datafile from "./datafile";
import { Link } from "react-router-dom";
import "./resourceStyle.css";

const Resources = () => {
  const apiURL = "https://serenity-api-ga.herokuapp.com/resources";

  const [resources, setResources] = React.useState(null);

  const getResources = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    setResources(data);
  };

  React.useEffect(() => {
    getResources();
  }, []);

  const listing = datafile.map((item, index) => {
    return (
      <Link to={`/resource/${item.postId}`} key={index}>
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
  return (
    <div className="resources">
      <h2>Resources</h2>
      <h3>Laila's Library</h3>
      {listing}
    </div>
  );
};

export default Resources;
