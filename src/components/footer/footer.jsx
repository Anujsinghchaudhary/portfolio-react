import React from 'react';
import "./footer.css";
import Logo_anuj from '../../assets/Logo_anuj.svg';
import user_icon from '../../assets/user_icon.svg';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={Logo_anuj} alt="Footer Logo" />
          <p>I am a front end developer, currently pursuing CSE from Graphic Era University Dehradun, UK, INDIA.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' />
            <div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Anuj Singh. All rights reserved</p>
            <div className="footer-bottom-right">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;