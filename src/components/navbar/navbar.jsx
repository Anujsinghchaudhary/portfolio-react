import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import logo_anuj from '../../assets/logo_anuj.jpg';
import nav_underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  useEffect(() => {
    console.log("Current menu:", menu);
  }, [menu]);

  return (
    <div className="navbar bg-black">
      <img src={logo_anuj} alt="logo" className="logo-image" />
      <ul ref={menuRef} className="nav-menu">
        <li>
        <AnchorLink className="anchor-link" href="#home" onClick={() => setMenu("home")}>
          Home
        </AnchorLink>
        </li>
        <li>
        <AnchorLink className="anchor-link" href="#aboutme" onClick={() => setMenu("aboutme")}>
         aboutme
        </AnchorLink>
        </li>
        <li>
        <AnchorLink className="anchor-link" href="#services" onClick={() => setMenu("services")}>
         Services
        </AnchorLink>
        </li>
        <li>
        <AnchorLink className="anchor-link" href="#portfolio" onClick={() => setMenu("connect")}>
        Portfolio
        </AnchorLink>
        </li>
        <li>
        <AnchorLink className="anchor-link" href="#contact" onClick={() => setMenu("connect")}>
          Connect with me
        </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact" onClick={() => setMenu("connect")}>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;