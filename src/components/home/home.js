import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../../style/home.css';

const home = () => {
  return (
    <main className="home" id="home">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}>
        <p className="shadow">Cardon David</p>
        <p className="shadow">Intégrateur web</p>
        <p className="shadow">Développeur junior</p>
        <Link className="button" to="project" spy={true} smooth={true} offset={-50} duration={500}>
          Mes réalisations
        </Link>
      </motion.div>
    </main>
  );
};

export default home;
