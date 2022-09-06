import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="">
      <div className="card">
        <span className="card-icon pb-2">{props.icon}</span>
        <h6 className="card-head m-0">{props.name}</h6>
        <p className="card-body">{props.details}</p>
        <button className="cardButton">{props.info}</button>
      </div>
    </div>
  );
}
export default Card;
