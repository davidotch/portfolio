import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HeaderData } from './headerData'
import '../style/header.css'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <nav className="navbar">
        <Link className="logo" to="/">
          &lsaquo;/<span>CD</span>&rsaquo;
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {HeaderData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  to={item.path}
                  // activeClassName="active"
                  onClick={closeMenu}>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
export default Header
