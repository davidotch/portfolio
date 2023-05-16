import Background from '../../assets/desktop.jpg';

export default function home() {
    return (
        <main className='home'>

            <img className='home_img'
                src={Background}
                alt='laptop'               
            />

            <div className='home_container'>
                <h1 className='home_title shadow-title'>&lsaquo;Développeur, intégrateur Web junior /&rsaquo;</h1>  
            </div>

            <div className='home_about'>
                <h1 className='home_about_title'>A Propos</h1>

            <p className='home_about_text'>Je m'appelle David, j'ai 42 ans et je suis Développeur Web Junior.</p>

            <p className='home_about_text'>Après une formation Chez OpenClassrooms, j'ai acquis de nombreuses compétences et connaissances grâce à des projets réalisés dans différents langages de programmation.</p>

            <p className='home_about_text'>Conscient du chemin à parcourir pour monter en compétences, je suis plus que jamais motivé à apprendre pour m'améliorer.</p>

            <p className='home_about_text'>Tout en prenant en compte que notre métier est en perpétuelle évolution, je considère qu'il est important de chercher continuellement à se former en repoussant les limites de ses connaissances.</p>
            </div>
              
        </main>
    );
} 