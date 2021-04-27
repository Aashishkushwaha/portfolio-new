import React from 'react'
import '../styles/Projects.scss'

const Projects = ({props: {theme}}) => {
  return (
    <section className="section mt-84" id="projects">
      <h2 className="section__heading align-center">Projects</h2>
      <h3 className="section__heading-info">
        Below are some of my work projects which I created during self learning.
      </h3>
      <div className="projects-illutration-container">
        <img className="projects-illutration" src={`./assets/images/projects_${theme}.svg`} alt="skills"/>
      </div>
    </section>
  )
}

export default Projects
