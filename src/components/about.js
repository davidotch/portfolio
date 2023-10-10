import React from 'react'
import { motion as m } from 'framer-motion'
import '../style/about.css'
import Cv from '../assets/CV_DAVID_CARDON.pdf'
import Photo from '../assets/photo-profil.jpg'

const About = () => {
  return (
    <>
      <m.section
        className="about"
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, ease: 'ease' },
        }}>
        <div className="about-img">
          <img src={Photo} alt="" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>
            <span className="span">&lsaquo;/</span>A Propos de Moi
            <span className="span">&rsaquo;</span>
          </h3>
          <p>
            Après plusieurs années dans la maintenance automobile, j’ai décidé
            d’entreprendre une reconversion professionnelle dans un domaine
            alliant créativité et informatique: le Développement Web. J’ai donc
            complété mon parcours par une formation diplômante chez{' '}
            <a
              href="https://openclassrooms.com/fr/paths/594-integrateur-web"
              className="openclassroom"
              target="_blank"
              rel="noopener noreferrer">
              OpenClassroom
            </a>{' '}
            dans le but de devenir Développeur Web.
            <br />
          </p>
          <p>
            Conscient du chemin à parcourir pour monter en compétences, je suis
            plus que jamais motivé à apprendre pour m'améliorer. Tout en prenant
            en compte que notre métier est en perpétuelle évolution, je
            considère qu'il est important de chercher continuellement à se
            former en repoussant les limites de ses connaissances.
          </p>
          <div className="btn-box btns">
            <a
              className="btn"
              href={Cv}
              target="_blank"
              rel="noopener noreferrer">
              Mon CV
            </a>
          </div>
        </div>
      </m.section>
    </>
  )
}

export default About
