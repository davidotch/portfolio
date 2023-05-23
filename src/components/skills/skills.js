import React from "react";

const skills = () => {
    return(
        <section className="skills">
            <span id="skills"></span>
            
            <h2 className="skills_h2">Compétences</h2>

            <div className="skills_types">
                <div className="skills_background">
                    <div>
                        <h3>Front-End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_background">
                    <div>
                        <h3>Back-End</h3>
                        <ul>
                            <li>NodeJS</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>

                <div className="skills_background">
                    <div>
                        <h3>Framework</h3>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>


    );
}

export default skills