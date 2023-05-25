import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelopeSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='contact' className='footer'>
            <div className='footer_container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Accueil</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>A propos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills'>Compétences</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#project'>Portfolio</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='https://github.com/davidotch' target='_blank' rel='noreferrer'><FaGithubSquare size={40} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/david-cardon-b293a8199/' target='_blank' rel='noreferrer'><FaLinkedin size={40} /></a>
                    </li>
                    <li>
                        <a href='mailto:da.cardon@outlook.fr'><FaEnvelopeSquare size={40} /></a>
                    </li>
                </ul>
                <div className='footer_bottom'>
                    <p>2023 David Cardon. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
