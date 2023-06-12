import { SlLink } from 'react-icons/sl'
import { motion } from 'framer-motion'
import '../../style/card.css'

const Card = ({ title, cover, link, description, tech }) => {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.6 },
            }}>
            <img src={cover} alt="" />
            <div className="overlay">
                <h4>{title}</h4>
                <p>{description}</p>
                <p className="line">Technologies</p>
                <div className="tag">
                    {Array.isArray(tech) ? (
                        <ul>
                            {tech.map((item, id) => (
                                <li key={id}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        tech
                    )}
                </div>
                <p className="line">Liens</p>
                <p>
                    <a href={link} target="_blank" rel="noreferrer">
                        <SlLink className="links" />
                        Accéder au site
                    </a>
                </p>
            </div>
        </motion.div>
    )
}

export default Card
