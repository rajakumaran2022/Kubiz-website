import React from "react";

function Project({ list }) {
  return (
    <div className="container-fixed">
      <div className="text-center project">
        <img
          id="project-img"
          src={list.img}
          alt=""
          className="img-fluid p-3"
        ></img>
        <h6 className="card-title">{list.title}</h6>
      </div>
    </div>
  );
}
export default Project;
