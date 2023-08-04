import React from "react";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Fade from "react-reveal/Fade";
import "./Home.css";

function Home() {
  return (
    <>
    <Fade bottom>
      <div className="Home">
        <h1 className="home-logo">PORTFOLIO</h1>
        <img src="mypic.jpeg" alt="mypic" className="mypic" />
        <h1 className="home-name">Chiranjit Mukherjee</h1>
        <h1 className="home-nametag">Web Developer</h1>
        <hr className="line-6"></hr>
        <AiOutlineMail className="home-mailicon" />
        <h1 className="home-mailname">Email</h1>
        <a href="mailto:chiranjitmukherjee071@gmail.com">
          <h1 className="home-mail">chiranjitmukherjee071@gmail.com</h1>
        </a>
        <AiOutlineLinkedin className="home-linkedinicon" />
        <a href="https://www.linkedin.com/in/chiranjit-mukherjee-3a7b2a267">
          <h1 className="home-linkedin">Linkedin</h1>
        </a>
        <CiLocationOn className="home-locicon" />
        <h1 className="home-loc">Location</h1>
        <h1 className="home-locname">Bangalore, India</h1>
      </div>
    </Fade>
     </> 
  );
}

export default Home;
