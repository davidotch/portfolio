import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo-v2.png';
import '../../style/header.css';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  //change color scrolling header
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-color' : 'header'}>
      <nav className="navbar">
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              A propos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              Compétences
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
