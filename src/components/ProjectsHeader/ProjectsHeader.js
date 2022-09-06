import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./projectheader.css";
function ProjectsHeader() {
  return (
    <div className="projects">
    <div className="container-fixed">
      <div className="d-flex align-items-center">
        <div className="heading">
          <h3 className="">OUR BEST PORTFOLIO</h3>
        </div>
        <div className="arrow">
          <span className="backward">
            <IoIosArrowBack />
          </span>
          <span className="forward">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
     <div className="project-section container-fixed">
     <hr></hr>
   </div>
   </div>
  );
}
export default ProjectsHeader;
