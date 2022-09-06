import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="f-bg">
        <div className="container-fixed footer d-flex align-item-center justify-content-between p-0">
          <div className="about d-flex flex-column">
            <div>
              <h5>ABOUT</h5>
              <p>
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip lorem ipsum dolor sit amet,
                consectetur adip lorem ipsum dolor sit amet, consectetur adip
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                sit amet, consectetur adip amet, consectetur adip lorem ipsum
                dolor sit amet, consectetur adip
              </p>
            </div>
            <div className="d-flex align-items-center icon">
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
          <div className="link">
            <h5>USEFUL LINKS</h5>
            <div className="links">
              <p>
                <BsPlayFill />
                <small> About us</small>
              </p>
              <p>
                <BsPlayFill />
                <small> Financial Support</small>
              </p>
              <p>
                <BsPlayFill />
                <small> Press Release</small>
              </p>
              <p>
                <BsPlayFill />
                <small> In the news</small>
              </p>
              <p>
                <BsPlayFill />
                <small>Testimonials</small>
              </p>
              <p>
                <BsPlayFill />
                <small>Our mission</small>
              </p>
            </div>
          </div>
          <div className="links">
            <p>
              <BsPlayFill />
              <small> About us</small>
            </p>
            <p>
              <BsPlayFill />
              <small> Financial Support</small>
            </p>
            <p>
              <BsPlayFill />
              <small> Press Release</small>
            </p>
            <p>
              <BsPlayFill />
              <small> In the news</small>
            </p>
            <p>
              <BsPlayFill />
              <small>Testimonials</small>
            </p>
            <p>
              <BsPlayFill />
              <small>Our mission</small>
            </p>
          </div>
          <div className="contact-us">
            <h5>CONTACT US</h5>
            <p>207 Rose street,schumburg,illinos-6029483</p>
            <p>
              phone:<span>(123) 123-456</span>
            </p>
            <p>
              Fax:<span>(123) 123-456</span>
            </p>
            <p>
              Email :<span>office@example.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" footer-end text-center p-0">
        <p className="m-0 p-2">
          @ copyright 2022 by <span>Kubiz.</span>All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
