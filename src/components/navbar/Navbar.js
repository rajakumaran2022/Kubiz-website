import React from "react";
import "./Nav.css";
import { BiWorld } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container-fixed">
        <div id="nav-content" className="d-flex align-items-center">
          <div className="d-flex">
            <p class="py-0">
              <span><BiWorld /></span>
            </p>
            <p><span>LANGUAGE :</span> ENGLISH</p>
            <p className="py-0">
              <span><IoIosCall /></span>
            </p>
            <p><span>PHONE :</span> +887524694415</p>
          </div>
        </div>
        <div id="nav-content" className="d-flex align-items-center">
          <p>
            <AiFillFacebook />
          </p>
          <p>
            <AiFillTwitterCircle />
          </p>
          <p>
            <AiOutlineGooglePlus />
          </p>
          <p>
            <AiOutlineInstagram />
          </p>
          <p>
            <AiOutlineYoutube />
          </p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
