import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
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
                    <li className='nav-item'>
                      <a href='#contact'>Contact</a>
                    </li>
                </ul>
                <div className='footer_bottom'>
                    <span className='footer_line'></span>
                    <p>2023 David Cardon. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
