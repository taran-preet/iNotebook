import React from "react";
import video from "../video.mp4";
export const About = () => {
  return (
    <div>
      <video width="1150" height="500" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
