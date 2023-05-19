import React from "react";

const home = () => {
    return (
        <main className='home'>
            <div className='home_container shadow'>
                <p className="home_container--nth">Portfolio</p>
                <p className="home_container--nth2">Développeur junior</p>
                <p className="home_container--nth3">Intégrateur Web</p>
                <button href='#project' className='home_button'>Mes réalisations</button>
            </div>
        </main>
    );
} 

export default home