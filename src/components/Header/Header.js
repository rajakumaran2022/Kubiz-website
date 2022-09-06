/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import { ImHome } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsLifePreserver } from "react-icons/bs";
import { ImBlogger2 } from "react-icons/im";
import { MdOutlineContactMail } from "react-icons/md";
import { GrFormSearch } from "react-icons/gr";

function Header() {
  return (
    <div className="navbar bg-white text-secondary">
      <div className="container-fixed header">
        <div className="navbar-header">
          <h1>
            KUB<span>I</span>Z
          </h1>
        </div>
        <div className="d-flex">
          
          <div className="text-center nav-links">
            <span className="p-1">
              <ImHome />
            </span>
            <li>
              <a>HOME</a>
            </li>
          </div>
          <div className="text-center nav-links">
            <span className="p-1">
              <FcAbout />
            </span>
            <li>
              <a>ABOUT</a>
            </li>
          </div>
          <div className="text-center nav-links">
            <span className="p-1">
              <MdOutlineBusinessCenter />
            </span>
            <li>
              <a>PORTFOLIO</a>
            </li>
          </div>
          <div className="text-center nav-links">
            <span className="p-1">
              <BsLifePreserver />
            </span>
            <li>
              <a>SERVICES</a>
            </li>
          </div>
          <div className="text-center nav-links">
            <span className="p-1">
              <ImBlogger2 />
            </span>
            <li>
              <a>BLOG</a>
            </li>
          </div>
          <div className="text-center nav-links">
            <span className="p-1">
              <MdOutlineContactMail />
            </span>
            <li>
              <a>CONTACT</a>
            </li>
          </div>
          <div className="text-center nav-links">
            <span id="icon" className="fs-5">
              <GrFormSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
