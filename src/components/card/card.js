import React from "react";
import { Link } from "react-router-dom";

const card = ({id, title, cover}) => {
    return (
        <Link to={`/project/${id}`}
        className="card_project">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    )
}

export default card