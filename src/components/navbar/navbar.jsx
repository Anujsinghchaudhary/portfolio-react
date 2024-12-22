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
    <div className='navbar'>
      <img src={logo_anuj} alt="logo" className='logo-image' />
      <ul ref={menuRef} className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' href='#hero' onClick={() => setMenu("home")}>
            <p>Home</p>
            {menu === "home" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#aboutme' onClick={() => setMenu("about")}>
            <p>About me</p>
            {menu === "about" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#skills' onClick={() => setMenu("services")}>
            <p>Services</p>
            {menu === "services" && <img src={nav_underline} alt='Underline' />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#projects' onClick={() => setMenu("mywork")}>
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
      <div className="nav-connect">
        <AnchorLink className='anchor-link' href='#contact' onClick={() => setMenu("connect")}>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;