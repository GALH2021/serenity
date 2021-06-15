import React from "react";

const SingleResources = (props) => {
  const idx = props.match.params.id - 1;
  const data = props.resourceData[idx];

  console.log("single props: ", idx);
  console.log(data);

  const backToStock = () => {
    props.history.push("/");
  };

  return (
    <div>
      <div>
        <h3>{data.desc}</h3>
        <p>Category: {data.category}</p>
        <p>Type: {data.type}</p>
        <p>Post Score: {data.postScore}</p>
        <p>Date Posted: {data.createdAt}</p>
      </div>

      <div>
        <img src={data.imgUrl} alt={data.title} style={{ width: "300px" }} />
        <p>By: {data.author}</p>
        <p>{data.content}</p>
        <a href={data.source} target="_blank" rel="noreferrer">
          Sources
        </a>
        {data.audioUrl !== "" ? (
          <div>
            <iframe
              title="podcast"
              width="50%"
              height="200"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={data.audioUrl}
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: " anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate ,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: "100",
              }}
            >
              <a
                href="https://soundcloud.com/caregiversos"
                title="Caregiver SOS On Air"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Caregiver SOS On Air
              </a>
              <a
                href="https://soundcloud.com/caregiversos/making-death-in-hospice-care-a-peaceful-ritual-w-beth-cavenaugh"
                title="Making death in hospice care a peaceful ritual  w/ Beth Cavenaugh"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                Making death in hospice care a peaceful ritual w/ Beth Cavenaugh
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <button onClick={backToStock}>Go Back</button>
      <hr />
    </div>
  );
};

export default SingleResources;
