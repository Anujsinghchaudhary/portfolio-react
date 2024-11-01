import React, { useState, useRef } from 'react';
import './navbar.css';
import Logo_anuj from '../../assets/Logo_anuj.svg';
import nav_underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  return (
    <div className='navbar'>
      <img src={Logo_anuj} alt="logo" className='logo-image' />
      <ul ref={menuRef} className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' href='#home' onClick={() => setMenu("home")}>
            <p>Home</p>
            {menu === "home" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#about' onClick={() => setMenu("about")}>
            <p>About me</p>
            {menu === "about" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#services' onClick={() => setMenu("services")}>
            <p>Services</p>
            {menu === "services" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#mywork' onClick={() => setMenu("mywork")}>
            <p>Portfolio</p>
            {menu === "mywork" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#contact' onClick={() => setMenu("contact")}>
            <p>Contact</p>
            {menu === "contact" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect" onClick={() => setMenu("connect")}>
        <AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;