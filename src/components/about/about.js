import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../../style/about.css'
import Photo from '../../assets/photo.jpg'

const About = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/aboutData.json')
            const jsonData = await response.json()
            setData(jsonData)
        }

        fetchData()
    }, [])

    if (!data) {
        return <div>Chargement des données...</div>
    }

    const {
        profilList,
        softSkills,
        quote,
        quoteAuthor,
        careerDescription,
        careerAdditionalInfo,
    } = data

    return (
        <section className="about">
            <span id="about"></span>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.6 },
                }}>
                A propos
            </motion.h2>

            <div className="info">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.9 },
                    }}>
                    <h3>Mon parcours</h3>
                    <p>
                        {careerDescription}
                        <br />
                        {careerAdditionalInfo}
                    </p>

                    <h3>Soft skills</h3>
                    <motion.ul
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 1,
                            transition: { duration: 0.5, delay: 0.6 },
                        }}>
                        {softSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </motion.ul>

                    <a
                        className="curriculum"
                        href={Photo}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="CV David CARDON">
                        {' '}
                        Télécharger mon CV
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.9 },
                    }}>
                    <img className="profil" src={Photo} alt="profil" />
                    <h3>Cardon David</h3>
                    <q>
                        {quote}
                        <br />
                        <strong>{quoteAuthor}</strong>
                    </q>
                    <motion.ul
                        initial={{ opacity: 0, Y: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 1,
                            transition: { duration: 0.5, delay: 0.6 },
                        }}>
                        {profilList.map((profil, index) => (
                            <li key={index}>{profil}</li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    )
}

export default About
