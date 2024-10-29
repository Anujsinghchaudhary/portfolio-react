import React, { useState, useRef } from 'react';
import './navbar.css';
import Logo_anuj from '../../assets/Logo_anuj.svg';
import nav_underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  function openMenu() {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={Logo_anuj} alt="logo" className='logo-image' />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
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
      <div className="nav-connect">
        <AnchorLink className='anchor-link' href='#connect'>connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
