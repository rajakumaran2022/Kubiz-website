import React from "react";
import "./Section.css";
import banner from "./banner.jpg";
import video from "./video.mp4";

function Section() {
  return (
    <div className="section">
      <div className="row">
        <div className="col-md-6">
          <video width="720" height="400" controls>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
        <div id="section2" className="col-md-6 content">
          <h3>Our Skillness</h3>
          <hr></hr>
          <p>
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur
          </p>
          <div id="range" className="d-flex flex-column">
            <span>Adobe Photoshop</span>
            <input
              className="w-75"
              type="range"
              id="vol"
              min="0%"
              max="100%"
            ></input>
          </div>
          <div id="range" className="d-flex flex-column">
            <span>Adobe ilustrator</span>
            <input
              className="w-75"
              type="range"
              id="vol"
              min="0%"
              max="100%"
            ></input>
          </div>
          <div id="range" className="d-flex flex-column">
            <span>Web Design </span>
            <input
              className="w-75"
              type="range"
              id="vol"
              min="0%"
              max="100%"
            ></input>
          </div>
          <div id="range" className="d-flex flex-column">
            <span>Programming</span>
            <input
              className="w-75"
              type="range"
              id="vol"
              min="0%"
              max="100%"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
