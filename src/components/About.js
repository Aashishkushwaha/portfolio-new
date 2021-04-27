import React from 'react'
import Button from './Button'
import { ABOUT_INFO } from '../utils/constants'
import { playTextToSound } from '../utils/utilFunctions'
import '../styles/About.scss'

const About = ({props: {theme, soundEnabled}}) => {
  const mouseEnterHandler = text => {
    playTextToSound(text)
  }

  return (
    <section className="section" id="about">
      <h2 className="section__heading align-center">Who am i?</h2>
      <h3 className="section__heading-info">
        Below are some details about me I think you might find interesting.
      </h3>
      <div className="about-container">
        <div className="about-illutration-container">
          <img className="about-illutration" src={`./assets/images/about_${theme}.svg`} alt="skills"/>
        </div>
        <ul className="about-details-container">
          <li onMouseEnter={() => {
            soundEnabled && mouseEnterHandler(`I'm Aashish from Pune, India.`)}
          }>I'm <mark>Aashish Kushwaha</mark> from Pune, India.</li>
          {
            ABOUT_INFO.map((item, index) => (
              <li key={index}
                onMouseEnter={() => soundEnabled && mouseEnterHandler(item)}
              >{item}</li>
            ))
          }
          <div className="mt-36 flex">
            <a
              style={{ height: '3.6rem' }} target="_blank" rel="noreferrer"
              href="https://drive.google.com/file/d/1jMqLxIxBoEEaAo7M5dLY083qGYTZESIn/view?usp=sharing" 
              onMouseEnter={() => soundEnabled && mouseEnterHandler('Download Resume')}
              onFocus={() => soundEnabled && mouseEnterHandler('Download Resume')}
            >
              <Button label="Download Resume" type="3d-rotate"/>
            </a>
          </div>
        </ul>
      </div>
    </section>
  )
}

export default About
