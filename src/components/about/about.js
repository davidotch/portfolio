import React from 'react';
import '../../style/about.css';
import Photo from '../../assets/photo.jpg';

const About = () => {
  return (
    <section className="about">
      <span id="about"></span>
      <h2>A propos</h2>

      <div className="info">
        <div>
          <h3>Mon parcours</h3>
          <p>
            Après plusieurs années dans la maintenance automobile, j’ai décidé d’entreprendre une
            reconversion professionnelle dans un domaine alliant créativité et informatique: le
            Développement Web. j’ai donc complété mon parcours par une formation diplômante chez{' '}
            <a
              className="openclassroom"
              href="https://openclassrooms.com/fr/paths/594-integrateur-web"
              target="_blank"
              rel="noreferrer"
              title="Site de l'école">
              <strong>OpenClassrooms</strong>
            </a>{' '}
            dans le but de devenir Développeur Web.
            <br />
            Conscient du chemin à parcourir pour monter en compétences, je suis plus que jamais
            motivé à apprendre pour m'améliorer.
            <br />
            Tout en prenant en compte que notre métier est en perpétuelle évolution, je considère
            qu'il est important de chercher continuellement à se former en repoussant les limites de
            ses connaissances.{' '}
          </p>

          <h3>Soft skills</h3>
          <ul>
            <li>Esprit d'équipe</li>
            <li>Autonomie</li>
            <li>Curiosité</li>
            <li>Esprit d'entraide</li>
            <li>Persévérant</li>
            <li>Ouverture d'esprit</li>
          </ul>

          <a
            className="curriculum"
            href="/images/CV_Cardon_David.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV David CARDON">
            {' '}
            Télécharger mon CV
          </a>
        </div>

        <div>
          <img className="profil" src={Photo} alt="profil" />
          <h3>David Cardon</h3>
          <q>
            Le succès vient de la curiosité, de la concentration, de la persévérance et de
            l'autocritique.
            <br />
            <strong>Albert Einstein</strong>
          </q>
          <ul>
            <li>42 ans</li>
            <li>Châteauroux</li>
            <li>Hobbies: Cyclisme, Guitare, Jeux Vidéo</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
