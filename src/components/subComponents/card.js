import { SlLink } from 'react-icons/sl'

import '../../style/card.css'

const Card = ({ title, cover, link, description, tech }) => {
  return (
    <div className="card">
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
        <div className="btn-box">
          <a className="btn" href={link} target="_blank" rel="noreferrer">
            <SlLink className="links" />
            Accéder au site
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
