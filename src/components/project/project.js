import Booki from '../../assets/booki.png'
import ohmyfood from '../../assets/ohmyfood.png'
import LaPanthere from '../../assets/agence.png'
import Kanap from '../../assets/kanap.png'
import HotTakes from '../../assets/HotTakes.png'
import Kasa from '../../assets/Kasa-Accueil-1.png'

export default function project() {
    return(
        <section className="portfolio">
            <span id="project"></span>
            <h2>portfolio</h2>
            <div className="portfolio_project">
                <div className="portfolio_container">
                    <a href="project" className="portfolio_card">
                        <img
                           class="portfolio_card-img"
                           src={Booki}
                           alt="Site Booki"
                           title="Booki" />
                        <p class="portfolio_title">Booki</p>
                     </a>
                     <a href="project" className="portfolio_card">
                        <img
                           class="portfolio_card-img"
                           src={ohmyfood}
                           alt="herbegement"
                           title="ohmyfood" />
                        <p class="portfolio_title">OhMyFood</p>
                     </a>
                     <a href="project" class="portfolio_card">
                        <img
                           class="portfolio_card-img"
                           src={LaPanthere}
                           alt="herbegement"
                           title="La Panthère" />
                        <p class="portfolio_title">La Panthère</p>
                     </a>
                </div>
                <div className="portfolio_container">
                        <a href="project" class="portfolio_card">
                        <img
                           class="portfolio_card-img"
                           src={Kanap}
                           alt="herbegement"
                           title="site Kanap" />
                        <p class="portfolio_title">Kanap</p>
                     </a>
                     <a href="project" class="portfolio_card">
                        <img
                           class="portfolio_card-img"
                           src={HotTakes}
                           title="Site Hot Takes" />
                        <p class="portfolio_title">Hot Takes</p>
                     </a>
                     <a href="project" class="portfolio_card">
                        <img
                           class="portfolio_card-img"
                           src={Kasa}
                           title="Site Kasa" />
                        <p class="portfolio_title">Kasa</p>
                     </a>
                </div>
            </div>
        </section>
    )
}