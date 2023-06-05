import '../../style/card.css';

const Card = ({title, cover, link, description, tech}) => {
    return (
        <div className="card">
            <img src={cover} alt="" />
                <div className='overlay'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className='line'></span>
                    <p><span className='tag'>{tech}</span></p>
                    <span className='line'></span>
                    <p><a href={link} target="_blank" rel="noreferrer">Accéder au site</a></p>
                </div>
        </div>
    );
}

export default Card