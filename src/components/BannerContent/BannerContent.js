import React from "react";
import "./Bannercontent.css";
function BannerContent() {
  return (
    <div className="container-fixed d-flex align-items-center banner1">
      <div>
        <p>
          We will make you proud.Hire us and
          <span> Start your dream project now</span>
        </p>
      </div>
      <div>
        <button className="btn-learn">GET STARTED</button>
      </div>
    </div>
  );
}
export default BannerContent;
