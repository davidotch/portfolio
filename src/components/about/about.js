import React from "react";

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about_container">
                <h2 className='about_title'>A Propos</h2>

                <hr />

                <p className='about_text'>Je m'appelle David, j'ai 42 ans et je suis Développeur, Intégrateur Web Junior.</p>

                <hr />

                <p className="about_text">Après une formation chez OpenClassrooms, j'ai acquis de nombreuses compétences et connaissances grâce à des projets réalisés dans différents langages de programmation.</p>

                <hr />

                <p className="about_text">Conscient du chemin à parcourir pour monter en compétences, je suis plus que jamais motivé à apprendre pour m'améliorer. Tout en prenant en compte que notre métier est en perpétuelle évolution, je considère qu'il est important de chercher continuellement à se former en repoussant les limites de ses connaissances.
                </p>

                <hr />

                <p className="about_text">Alors si vous aussi, vous partagez ce point de vue et que vous souhaitez en savoir plus, n'hésitez pas à me <a href="#contact" className="about_text--contact"><strong>contacter</strong></a>.</p>

                

                
            </div>      
        </div>
    )
}

export default About