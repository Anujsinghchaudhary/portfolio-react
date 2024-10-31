import React from "react";
import './Hero.css';
import Profile_anuj from "../../assets/Profile_anuj.svg";
import AnchorLink from "react-anchor-link-smooth-scroll"
import social_links from "../../api/social_links.json";
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Profile_anuj} alt="Profile_anuj" width="300px" height="300px"/>
      <h1><span>I am Anuj Singh</span></h1>
      <p>Full Stack Developer | Problem Solver | Learner</p>
      <div className="hero-action">
        <div className="hero-contact">
          <AnchorLink href="#contact">Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">
  <a href={social_links.linkedin} target='_blank' rel='noopener noreferrer'>
    My resume
  </a>
</div>
      </div>
    </div>
  );
}

export default Hero;