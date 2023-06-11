import React from 'react';
import '../../style/about.css';
import Photo from '../../assets/photo.jpg';
import data from '../../datas/data.json';


const About = () => {

  const {
    profilList,
    softSkills,
    quote,
    quoteAuthor,
    careerDescription,
    careerAdditionalInfo
  } = data;

  return (
    <section className="about">
      <span id="about"></span>
      <h2>A propos</h2>

      <div className="info">
        <div>
          <h3>Mon parcours</h3>
          <p>
            {careerDescription}
            <br />
            {careerAdditionalInfo}
          </p>

          <h3>Soft skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <a
            className="curriculum"
            href={Photo}
            target="_blank"
            rel="noopener noreferrer"
            download="CV David CARDON">
            {' '}
            Télécharger mon CV
          </a>
        </div>

        <div>
          <img className="profil" src={Photo} alt="profil" />
          <h3>Cardon David</h3>
          <q>
            {quote}
            <br />
            <strong>{quoteAuthor}</strong>
          </q>
          <ul>
            {profilList.map((profil, index) => (
              <li key={index}>{profil}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
