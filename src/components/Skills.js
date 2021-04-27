import React from 'react'
import { SKILLS } from '../utils/constants'
import { playTextToSound } from '../utils/utilFunctions'
import '../styles/Skills.scss'

const Skills = ({props: {theme, soundEnabled}}) => {
  const mouseEnterHandler = text => {
    playTextToSound(text)
  }

  return (
    <section className="section" id="skills">
      <h2 className="section__heading align-center">Skills</h2>
      <h3 className="section__heading-info">
        During my self learning journey I've gained knowledge in below technologies.
      </h3>
      <div className="skills-illutration-container">
        <img className="skills-illutration" src={`./assets/images/skills_${theme}.svg`} alt="skills"/>
      </div>
      <ul className="skills-container">
        {
          SKILLS.map(skill => (
            <div key={skill} className="skills-item-wrapper">
              <li 
                className={`skills-item skills-item-${theme} flex`} 
                onMouseEnter={() => soundEnabled && mouseEnterHandler(skill)}
              >
                <img className="skills-item-img" src={`./assets/images/skills/${skill}.svg`} alt={skill}/>
              </li>
              <span className="skills-item-name">{skill}</span>
            </div>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills
