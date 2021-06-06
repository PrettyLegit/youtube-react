import React from "react";

const Video = (props) => {
  return (
    <div>
      <img src={props.thumbnail.url} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.dateAdded}</h3>
      <h3>{props.channel}</h3>
    </div>
  )
};

export default Video;
