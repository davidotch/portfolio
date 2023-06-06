import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelopeSquare } from 'react-icons/fa'
import '../../style/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-footer'>
                <ul>
                    <li>
                        <a href='https://github.com/davidotch' target='_blank' rel='noreferrer'><FaGithubSquare size={45} color='#f8f8f8' /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/david-cardon-b293a8199/' target='_blank' rel='noreferrer'><FaLinkedin size={45} color='#f8f8f8' /></a>
                    </li>
                    <li>
                        <a href='mailto:da.cardon@outlook.fr'><FaEnvelopeSquare size={45} color='#f8f8f8' /></a>
                    </li>
                </ul>
                <div className='copyright'>
                    <p>2023 | David Cardon | All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
