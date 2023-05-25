// import { Link } from 'react-router-dom';

const Card = ({title, cover, description, link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer"
        className="card_accomodation">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    );
}

export default Card