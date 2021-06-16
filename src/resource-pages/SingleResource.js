import React from "react";

const SingleResources = (props) => {
  // const idx = props.match.params.id - 1;
  // const data = props.resourceData[idx];

  // console.log(data);

  const backToStock = () => {
    props.history.push("/home");
  };

  const apiURL = "https://serenity-api-ga.herokuapp.com/resources";
  const [resources, setResources] = React.useState([]);

  const idx = props.match.params.id;

  const getResources = async () => {
    const response = await fetch(apiURL);
    const allData = await response.json();
    console.log("single resource api call: ", allData);

    const data = allData[idx - 1];

    setResources(data);
  };

  React.useEffect(() => {
    getResources();
  }, []);

  return (
    <div className="single-resource">
      <div className="resource-header">
        <h4>{resources.desc}</h4>

        <div className="resource-tags">
          <div id="resource-category">Category: {resources.category}</div>
          <div id="resource-type">Type: {resources.type}</div>
          <div id="resource-score">Post Score: {resources.postScore}</div>
        </div>

        <span>Author: {resources.author} | </span>
        <span>Date Posted: {resources.createdAt} </span>
      </div>

      <div className="resource-content">
        {resources.audioUrl !== "" ? (
          <div className="audio-player">
            <iframe
              title="podcast"
              width="100%"
              height="150"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={resources.audioUrl}
            ></iframe>
          </div>
        ) : (
          ""
        )}

        <p>{resources.content}</p>

        <h4>Source Links:</h4>
        <a
          className="source-link"
          href={resources.source}
          target="_blank"
          rel="noreferrer"
        >
          Article
        </a>
      </div>
      <button onClick={backToStock}>Go Back</button>
      <hr />
    </div>
  );
};

export default SingleResources;
