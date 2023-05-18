import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function Header() { 

  //change color scrolling header
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <header className={color ? 'header header_color' : 'header'}>

      <ul className="header_logo">
        <li>
          <a href="/" className="header_logo">CARDON DAVID</a>
        </li>
      </ul>

      <ul className="header_link">
        <li className="header_link_active">
          <a href="/">Accueil</a>
        </li>
        <li className="header_link_active">
          <a href="#about">A propos</a>
        </li>
        <li className="header_link_active">
          <a href="#skills">Skills</a>
        </li>
        <li className="header_link_active">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="header_link_active">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      
    </header>
  );
}