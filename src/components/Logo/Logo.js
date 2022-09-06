import React from "react";
import "./Logo.css";
import logo from "./logo.jpg";

function Logo() {
  return (
    <div id="logo" className="container-fixed">
      <div className="row">
        <div className="col-md-2 col-6">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-md-2 col-6">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-md-2 col-6">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-md-2 col-6">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-md-2 col-6">
          <img src={logo} alt="Logo" />
        </div>
        <div className="col-md-2 col-6">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
