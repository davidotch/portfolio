import React from "react";
import '../../style/skills.css';
import { SiCss3, SiHtml5, SiSass, SiJavascript, SiNodedotjs, SiReact, SiBootstrap,SiExpress } from 'react-icons/si';

const skills = () => {
    return(
        <section className="skills">
            <span id="skills"></span>
            
            <h2 className="skills_h2">Compétences</h2>

            <div className="container-skills">
                <div className="background">
                    <div>
                        <h3>Front-End</h3>
                        <ul>
                            <li><SiHtml5 size={80} color="#e44f26" /></li>
                            <li><SiCss3 size={80} color="#1572b6" /></li>
                            <li><SiSass size={80} color="#cd669a" /></li>
                            <li><SiJavascript size={80} color="#f0db4f" /></li>
                        </ul>
                    </div>
                </div>

                <div className="background">
                    <div>
                        <h3>Back-End</h3>
                        <ul>
                            <li><SiNodedotjs size={80} color="#689f63" /></li>
                            <li><SiExpress size={80} color="#666" /></li>
                        </ul>
                    </div>
                </div>

                <div className="background">
                    <div>
                        <h3>Framework</h3>
                        <ul>
                            <li><SiReact size={80} color="#61dafb" /></li>
                            <li><SiBootstrap size={80} color="#7e12f8" /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>


    );
}

export default skills