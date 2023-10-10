import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import '../style/skills.css'
import * as ReactIcons from 'react-icons/si'

const iconComponents = {
  SiHtml5: ReactIcons.SiHtml5,
  SiCss3: ReactIcons.SiCss3,
  SiSass: ReactIcons.SiSass,
  SiBootstrap: ReactIcons.SiBootstrap,
  SiReact: ReactIcons.SiReact,
  SiJavascript: ReactIcons.SiJavascript,
  SiNodedotjs: ReactIcons.SiNodedotjs,
  SiExpress: ReactIcons.SiExpress,
  SiMongodb: ReactIcons.SiMongodb,
  SiVisualstudiocode: ReactIcons.SiVisualstudiocode,
  SiGithub: ReactIcons.SiGithub,
}

const Skills = () => {
  const [skillsData, setSkillsData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/datas/skillData.json')
      const data = await response.json()
      setSkillsData(data)
    }

    fetchData()
  }, [])

  if (!skillsData) {
    return <div>Chargement des données...</div>
  }

  return (
    <m.section
      className="skills"
      id="skills"
      iinitial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'ease' },
      }}>
      <h3>
        <span className='span'>&lsaquo;/</span>Compétences<span className='span'>&rsaquo;</span>
      </h3>
      <div className="skills-content">
        <ul>
          {skillsData?.skillData &&
            skillsData.skillData.map((skill) => {
              const IconComponent = iconComponents[skill.icon]
              return (
                <li key={skill.name}>
                  <IconComponent size={80} color={skill.color} />
                  <span className="text">{skill.name}</span>
                </li>
              )
            })}
        </ul>
      </div>
    </m.section>
  )
}

export default Skills
