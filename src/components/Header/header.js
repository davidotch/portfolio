import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const Header = () => { 

  const [click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

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
        <div className={color ? "header header_color" : 'header'}>  
              <nav className='header_navbar'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='logo'>
                    <img className="header_logo" src={Logo} alt='logo' />
                </Link>
                <div className='header_hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "header_menu active" : "header_menu"}>
                    <li className='header_navitem'>
                        <Link className="header_navitem--a" to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Accueil</Link>
                    </li>
                    <li className='header_navitem'>
                        <Link className="header_navitem--a" to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>A propos</Link>
                    </li>
                    <li className='header_navitem'>
                        <Link className="header_navitem--a" to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Compétences</Link>
                    </li>
                    <li className='header_navitem'>
                        <Link className="header_navitem--a" to="project" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Portfolio</Link>
                    </li>
                    <li className="header_navitem">
                      <Link className="header_navitem--a" to="footer" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header