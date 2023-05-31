import React from "react";
import '../../style/home.css';

const home = () => {
    return (
        <main className='home' id="home">
            <div className='container shadow'>
                <p>Portfolio</p>
                <p>Intégrateur web</p>
                <p>Dévellopeur junior</p>
                <a className='button' href="#project">Mes réalisations</a>
            </div>
        </main>
    );
} 

export default home