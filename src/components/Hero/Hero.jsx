import React from "react";
import './Hero.css';
import Profile_anuj from "../../assets/Profile_anuj.svg";
import AnchorLink from "react-anchor-link-smooth-scroll"
import social_links from "../../api/social_links.json";
import styled from 'styled-components';

const Card = () => { 
  return (
    <StyledWrapper>
      <div className="card">
        <div className="blob" />
        <img className="img" src={Profile_anuj} alt="Profile" />
        <h2>Hi, I am Anuj<br /><span>Singh</span></h2>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 500px;
    height: 300px;
    background: #f0f0f0;
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
    background-color: #4bb8ff;
  }

  .blob {
    height: 10px;
    width: 75%;
    border-radius: 0 0 30px 30px;
    margin: 0 auto;
    background-color: #4bb8ff;
    transition: height 0.3s;
  }

  .card:hover .blob {
    height: 0;
  }

  .img {
    display: flex;
    margin: 30px auto 10px;
    width: 70px;
    height: 70px;
    background-color: #4bb8ff;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  .card:hover .img {
    width: 100%;
    height: 70%;
    border-radius: 10px 0 0;
    margin: 0 auto;
    background-color: #f0f0f0;
    z-index: 1;
  }

  h2 {
    padding: 15px 10px;
    font-size: 25px;
    transition: opacity 0.5s;
    line-height: 17px;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  span {
    font-size: 18px;
  }

  .card:hover h2 {
    opacity: 0;
  }

  p {
    opacity: 0;
    transition: opacity 0.75s;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
  }

  .card:hover > p {
    opacity: 1;
    transition: opacity 0.1s;
  }

  svg {
    padding: 5px;
  }
`;




const Hero = () => {
  return (
    <div id='home' className='hero'><Card>
      <img src={Profile_anuj} alt="Profile_anuj" width="300px" height="300px"/>
      </Card>
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