import React from "react";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillLinkedin,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import "./Contact.css";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <Fade top>
      <div className="Contact">
        <h1 className="contact-logo">Contact</h1>
        <div className="contact-details">
          <AiOutlineMail className="contact-mailicon" />
          <h1 className="contact-mailname">Email</h1>
          <a href="mailto:chiranjitmukherjee071@gmail.com">
            <h1 className="contact-mail">chiranjitmukherjee071@gmail.com</h1>
          </a>
          <AiOutlineLinkedin className="contact-linkedinicon" />
          <a href="https://www.linkedin.com/in/chiranjit-mukherjee-3a7b2a267">
            <h1 className="contact-linkedin">Linkedin</h1>
          </a>
          <CiLocationOn className="contact-locicon" />
          <h1 className="contact-loc">Location</h1>
          <h1 className="contact-locname">Bangalore, India</h1>
        </div>
        <hr className="line-7"></hr>
        <a href="https://www.linkedin.com/in/chiranjit-mukherjee-3a7b2a267">
          <AiFillLinkedin className="linkedin-icon" />
        </a>
        <a href="https://www.instagram.com/_anonymous__boi_/?hl=en">
          <AiOutlineInstagram className="insta-icon" />
        </a>
      </div>
    </Fade>
  );
}

export default Contact;
