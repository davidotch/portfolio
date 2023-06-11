import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../../style/skills.css';
import * as ReactIcons from 'react-icons/si';

const iconComponents = {
  SiHtml5: ReactIcons.SiHtml5,
  SiCss3: ReactIcons.SiCss3,
  SiSass: ReactIcons.SiSass,
  SiBootstrap: ReactIcons.SiBootstrap,
  SiReact: ReactIcons.SiReact,
  SiJavascript: ReactIcons.SiJavascript,
  SiNodedotjs: ReactIcons.SiNodedotjs,
  SiExpress: ReactIcons.SiExpress,
  SiMongodb: ReactIcons.SiMongodb
};

const Skills = () => {
  const [skillsData, setSkillsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/skillData.json');
      const data = await response.json();
      setSkillsData(data);
    };

    fetchData();
  }, []);

  if (!skillsData) {
    return <div>Chargement des données...</div>;
  }

  return (
    <section className="skills">
      <span id="skills"></span>

      <motion.h2
        className="skills_h2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}>
        Compétences
      </motion.h2>

      <div className="container-skills">
        <motion.div
          className="background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}>
          <div>
            <h3>Intégration</h3>
            <ul>
              {skillsData?.integration &&
                skillsData.integration.map((skill) => {
                  const IconComponent = iconComponents[skill.icon];
                  return (
                    <li key={skill.name}>
                      <IconComponent size={80} color={skill.color} />
                      <span className="text">{skill.name}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}>
          <div>
            <h3>Front-end</h3>
            <ul>
              {skillsData?.frontend &&
                skillsData.frontend.map((skill) => {
                  const IconComponent = iconComponents[skill.icon];
                  return (
                    <li key={skill.name}>
                      <IconComponent size={80} color={skill.color} />
                      <span className="text">{skill.name}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}>
          <div>
            <h3>Back-End</h3>
            <ul>
              {skillsData?.backend &&
                skillsData.backend.map((skill) => {
                  const IconComponent = iconComponents[skill.icon];
                  return (
                    <li key={skill.name}>
                      <IconComponent size={80} color={skill.color} />
                      <span className="text">{skill.name}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}>
          <div>
            <h3>Database</h3>
            <ul>
              {skillsData?.database &&
                skillsData.database.map((skill) => {
                  const IconComponent = iconComponents[skill.icon];
                  return (
                    <li key={skill.name}>
                      <IconComponent size={80} color={skill.color} />
                      <span className="text">{skill.name}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
