import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import Booki from '../../assets/booki.png'
import ohmyfood from '../../assets/ohmyfood.png'
import LaPanthere from '../../assets/agence.png'
import Kanap from '../../assets/kanap.png'
import HotTakes from '../../assets/HotTakes.png'
import Kasa from '../../assets/Kasa-Accueil-1.png'

const project = () => {
    return(
        <section className="portfolio">
            <span id="project"></span>
            <h2>portfolio</h2>
            <div className="portfolio_project">
                <div className="portfolio_container">
                    <div href="project" className="portfolio_card">
                        <img
                           className="portfolio_card-img"
                           src={Booki}
                           alt="Site Booki" />
                        <p className="portfolio_title">Booki 
                           <a className='link' href='https://github.com/davidotch/Booki' target='_blank' rel="noreferrer"><FaGithubSquare size={40} color='#5bb462' /></a>
                        </p>                    
                     </div>
                     <div href="project" className="portfolio_card">
                        <img
                           className="portfolio_card-img"
                           src={ohmyfood}
                           alt="site Ohmyfood" />
                        <p className="portfolio_title">OhMyFood
                           <a className='link' href='https://github.com/davidotch/Ohmyfood' target='_blank' rel="noreferrer"><FaGithubSquare size={40} color='#5bb462' /></a>
                        </p>
                     </div>
                     <div href="project" className="portfolio_card">
                        <img
                           className="portfolio_card-img"
                           src={LaPanthere}
                           alt="site La Panthère" />
                        <p className="portfolio_title">La Panthère
                           <a className='link' href='https://github.com/davidotch/la_panthere' target='_blank' rel="noreferrer"><FaGithubSquare size={40} color='#5bb462' /></a>
                        </p>
                     </div>
                </div>
                <div className="portfolio_container">
                        <div href="project" className="portfolio_card">
                        <img
                           className="portfolio_card-img"
                           src={Kanap}
                           alt="site Kanap" />
                        <p class="portfolio_title">Kanap
                           <a className='link' href='https://github.com/davidotch/kanap' target='_blank' rel="noreferrer"><FaGithubSquare size={40} color='#5bb462' /></a>
                        </p>
                     </div>
                     <div href="project" className="portfolio_card">
                        <img
                           className="portfolio_card-img"
                           src={HotTakes}
                           alt='site Hot Takes' />
                        <p className="portfolio_title">Hot Takes
                           <a className='link' href='https://github.com/davidotch/Piiquante-P6' target='_blank' rel="noreferrer"><FaGithubSquare size={40} color='#5bb462' /></a>
                        </p>
                     </div>
                     <div href="project" className="portfolio_card">
                        <img
                           className="portfolio_card-img"
                           src={Kasa}
                           alt='site Kasa' />
                        <p className="portfolio_title">Kasa
                           <a className='link' href='https://github.com/davidotch/kasa' target='_blank' rel="noreferrer"><FaGithubSquare size={40} color='#5bb462' /></a>
                        </p>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default project