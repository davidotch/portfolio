import { SlLink } from 'react-icons/sl';
import '../../style/card.css';

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
        <p>
          <a href={link} target="_blank" rel="noreferrer">
            <SlLink className="link" />
            Accéder au site
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
