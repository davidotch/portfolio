import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { motion as m } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import '../style/home.css'

const home = () => {
  return (
    <>
      <m.section
        className="home"
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, ease: 'ease' },
        }}>
        <div className="home-content">
          <h1>David Cardon</h1>
          <div className="text-animate">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Développeur web junior')
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('Intégrateur web junior')
                  .pauseFor(1500)
                  .start()
              }}
              options={{
                loop: true,
                deleteSpeed: 100,
              }}
            />
          </div>
          <div className="btn-box">
            <Link to="/project" className="btn">
              Portfolio
            </Link>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </div>

          <div className="home-sci">
            <a
              href="https://github.com/davidotch"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/david-cardon-b293a8199/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </m.section>
    </>
  )
}

export default home
