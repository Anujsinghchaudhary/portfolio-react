import React from "react";
import './Hero.css';
import Profile_anuj from "../../assets/Profile_anuj.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='Hero'>
      <img src={Profile_anuj} alt="Profile_anuj" />
      <h1><span>I am Anuj Singh</span></h1>
      <p>Full stack Developer</p>
      <div className="hero-action">
        <div className="hero-contact">
          <AnchorLink href="#contact">Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;