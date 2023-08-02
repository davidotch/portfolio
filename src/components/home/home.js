import React from 'react'
// import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import '../../style/home.css'

const home = () => {
    return (
        <main className="home" id="home">
            <div className="container">
                <motion.p
                    className="shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, delay: 0.3 },
                    }}>
                    Cardon David
                </motion.p>
                <motion.p
                    className="shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, delay: 0.6 },
                    }}>
                    Intégrateur web
                </motion.p>
                <motion.p
                    className="shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, delay: 0.9 },
                    }}>
                    Développeur Web junior
                </motion.p>
                <motion.a
                    className="button"
                    href="#project"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, delay: 1.2 },
                    }}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    Mes réalisations
                </motion.a>
            </div>
        </main>
    )
}

export default home
