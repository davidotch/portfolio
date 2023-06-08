import React from 'react';
import { Link } from 'react-scroll';
import '../../style/home.css';

const home = () => {
  return (
    <main className="home" id="home">
      <div className="container">
        <p className="shadow">Cardon David</p>
        <p className="shadow">Intégrateur web</p>
        <p className="shadow">Développeur junior</p>
        <Link className="button" to="project" spy={true} smooth={true} offset={-50} duration={500}>
          Mes réalisations
        </Link>
      </div>
    </main>
  );
};

export default home;
