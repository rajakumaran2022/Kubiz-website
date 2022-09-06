/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact container-fixed d-flex align-items-stretch justify-content-between">
      <div className="d-flex flex-column get">
        <h3>GET TOUCH WITH US </h3>
        <hr></hr>
        <input type="text" placeholder="Name" className="name"></input>
        <input
          type="text"
          placeholder="Enter your Email"
          className="email"
        ></input>
        <input
          id="input"
          type="text"
          placeholder="Write Your Message..."
          className="message"
        ></input>
        <button className="button">CONTACT US</button>
      </div>
      <div className="frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="500"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </div>
  );
}
export default Contact;
