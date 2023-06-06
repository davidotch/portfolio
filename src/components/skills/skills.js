import React from "react";
import '../../style/skills.css';
import { SiCss3, SiHtml5, SiSass, SiJavascript, SiNodedotjs, SiReact, SiBootstrap, SiExpress, SiMongodb } from 'react-icons/si';

const skills = () => {
    return(
        <section className="skills">
            <span id="skills"></span>
            
            <h2 className="skills_h2">Compétences</h2>

            <div className="container-skills">
                <div className="background">
                    <div>
                        <h3>Intégration</h3>
                            <ul>
                                <li><SiHtml5 size={80} color="#e44f26" /><span className="text">Html 5</span></li>
                                <li><SiCss3 size={80} color="#1572b6" /><span className="text">CSS 3</span></li>
                                <li><SiSass size={80} color="#cd669a" /><span className="text">Sass</span></li>
                                <li><SiBootstrap size={80} color="#7e12f8" /><span className="text">Bootstrap</span></li>
                            </ul>
                    </div>
                </div>

                <div className="background">
                    <div>
                        <h3>Front-end</h3>
                            <ul>
                                <li><SiReact size={80} color="#61dafb" /><span className="text">ReactJS</span></li>
                                <li><SiJavascript size={80} color="#f0db4f" /><span className="text">Javascript</span></li>
                            </ul>
                    </div>
                </div>

                <div className="background">
                    <div>
                        <h3>Back-End</h3>
                            <ul>
                                <li><SiNodedotjs size={80} color="#689f63" /><span className="text">NodeJS</span></li>
                                <li><SiExpress size={80} color="#666" /><span className="text">ExpressJS</span></li>
                            </ul>
                    </div>
                </div>

                <div className="background">
                    <div>
                        <h3>Database</h3>
                            <ul>
                                <li><SiMongodb size={80} color="#61dafb" /><span className="text">MongoDB</span></li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default skills