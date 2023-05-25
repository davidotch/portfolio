import React from "react";

const home = () => {
    return (
        <main className='home'>
            <div className='home_container shadow'>
                <p className="home_container--nth">Portfolio</p>
                <p className="home_container--nth2">Développeur junior</p>
                <p className="home_container--nth3">Intégrateur Web</p>
                <a className='home_button' href="#project">Mes réalisations</a>
            </div>
        </main>
    );
} 

export default home