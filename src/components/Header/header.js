import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/logo-v2.png'
import { HeaderData } from '../Header/headerData'
import '../../style/header.css'

const Header = () => {
    const [click, setClick] = useState(false)
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
        <div className={color ? 'header header-color' : 'header'}>
            <nav className="navbar">
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
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
                    {HeaderData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    onClick={closeMenu}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
export default Header
