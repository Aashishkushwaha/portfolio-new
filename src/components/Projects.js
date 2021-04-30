import React, { useState } from 'react'
import Button from "./Button"
import { PROJECTS } from '../utils/constants'
import '../styles/Projects.scss'
import { playTextToSound, pauseTextToSound } from '../utils/utilFunctions'

const Projects = ({props: {theme, soundEnabled}}) => {
  const [limit, setLimit] = useState(3)

  const moreProjecsClickHandler = (e) => {
    if(limit !== 6) {
      e.preventDefault();
      setLimit(6)
    }
  }

  const playProjectInfo = (text) => {
    soundEnabled && playTextToSound(text)
  }

  return (
    <section className="section mt-84" id="projects">
      <h2 className="section__heading align-center">Projects</h2>
      <h3 className="section__heading-info">
        Below are some of my work projects which I created during self learning.
      </h3>
      <div className="projects-illutration-container">
        <img className="projects-illutration" src={`./assets/images/projects_${theme}.svg`} alt="skills"/>
      </div>
      <ul className="projects-container" id="projects-container">
        {
          PROJECTS.slice(0,limit).map(project => {
            return (
              <li key={project.title} className="projects-item">
                <div className="projects-item-thmbnail-container">
                  <img src={project.imgUrl} alt="project logo" className="projects-item-thmbnail"/>
                </div>
                <div className="projects-item-details-container"
                  onMouseEnter={() => playProjectInfo(`${project.title} is -  ${project.description}`)}
                  onMouseLeave={pauseTextToSound}
                >
                  <h3 className="moving-background projects-item-details-title">{project.title}</h3>
                  <p className="projects-item-details-description">{ project.description }</p>
                  <ul className="projects-item-details-tags-container">
                    {
                      project.tags.map(tag => <li className="projects-item-details-tags-item" key={tag}>{tag}</li>)
                    }
                  </ul>
                  <div className="projects-item-details-buttons-container">
                    <a rel="noreferrer" target="_blank" href={project.liveUrl}>
                      <Button label="View Demo"/>
                    </a>
                    <a rel="noreferrer"  target="_blank" href={project.githubUrl}>
                      <Button type="secondary" label="View Code"/>
                    </a>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className="projects-buttons-container">
        {
          limit === 6 && (
            <a href="#projects-container" onClick={() => setLimit(3)}>
              <Button type="secondary" label="See Less"/>
            </a>
          )
        }
        <a 
          onClick={e => moreProjecsClickHandler(e)}
          className="text-transparent" rel="noreferrer" target="_blank"
          href={limit === 6 ? "https://github.com/Aashishkushwaha?tab=repositories" : "/"}
        >
          <Button label={limit !== 6 ? "Load More" : "See more on github"}/>
        </a>
      </div>
    </section>
  )
}

export default Projects
