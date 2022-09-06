import React from "react";
import "./Sectionquote.css";
import p2 from "./p2.jpg";
function SectionQuote() {
  return (
    <div className="sq">
      <div className="container-fixed quote">
        <img src={p2} alt="" className="img-fluid"></img>
        <em className="py-4">
          Save your favorite articles to read offline, sync your reading lists
          across devices and customize your reading experience with the official
          Wikipedia app Save your favorite articles to read offline, sync your
          reading lists across devices and customize your reading experience
          with the official Wikipedia app Save your favorite articles to read
          offline, sync your reading lists across devices and customize your
          reading experience with the official Wikipedia app
        </em>
        <p>-John Doe,USA</p>
      </div>
    </div>
  );
}
export default SectionQuote;
