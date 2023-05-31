import React from "react";
import { Link } from "react-scroll";
import '../../style/home.css';

const home = () => {
    return (
        <main className='home' id="home">
            <div className='container shadow'>
                <p>Portfolio</p>
                <p>Intégrateur web</p>
                <p>Dévellopeur junior</p>
                <Link className='button' to="project" spy={true} smooth={true} offset={-50} duration={500}>Mes réalisations</Link>
            </div>
        </main>
    );
} 

export default home