import React from "react";

const SingleResources = (props) => {
  const idx = props.match.params.id - 1;
  const data = props.resourceData[idx];

  console.log(data);

  const backToStock = () => {
    props.history.push("/resources");
  };

  return (
    <div className="single-resource">
      <div className="resource-header">
        <h4>{data.desc}</h4>

        <div className="resource-tags">
          <div id="resource-category">Category: {data.category}</div>
          <div id="resource-type">Type: {data.type}</div>
          <div id="resource-score">Post Score: {data.postScore}</div>
        </div>

        <span>Author: {data.author} | </span>
        <span>Date Posted: {data.createdAt} </span>
      </div>

      <div className="resource-content">
        {data.audioUrl !== "" ? (
          <div className="audio-player">
            <iframe
              title="podcast"
              width="100%"
              height="150"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={data.audioUrl}
            ></iframe>
          </div>
        ) : (
          ""
        )}

        <p>{data.content}</p>

        <h4>Source Links:</h4>
        <a
          className="source-link"
          href={data.source}
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
