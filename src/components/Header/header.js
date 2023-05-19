import React, { useState } from "react";
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
                <a href='/' className='logo'>
                    <img className="header_logo" src={Logo} alt='logo' />
                </a>
                <div className='header_hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "header_menu header_menu--active" : "header_menu"}>
                    <li className='header_navitem'>
                        <a className="header_navitem--a" href='/' onClick={closeMenu}>Accueil</a>
                    </li>
                    <li className='header_navitem'>
                        <a className="header_navitem--a" href='#about' onClick={closeMenu}>A propos</a>
                    </li>
                    <li className='header_navitem'>
                        <a className="header_navitem--a" href='#skills' onClick={closeMenu}>Skills</a>
                    </li>
                    <li className='header_navitem'>
                        <a className="header_navitem--a" href='#project' onClick={closeMenu}>Portfolio</a>
                    </li>
                    <li className="header_navitem">
                      <a className="header_navitem--a" href="#contact" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header