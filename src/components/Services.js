import React from 'react'
import { SERVICES } from '../utils/constants'
import { playTextToSound } from '../utils/utilFunctions'
import '../styles/Services.scss'

const Services = ({props: {theme, soundEnabled}}) => {
  const mouseEnterHandler = text => {
    playTextToSound(text)
  }

  return (
    <section className="section" id="services">
      <h2 className="section__heading align-center">Services</h2>
      <h3 className="section__heading-info">
        I can help you out to find solution for below requirements.
      </h3>
      <ul className="services-container">
        {
          SERVICES.map(({title, bg, tags}) => (
            <li key={title} className="services-item-wrapper"
              onMouseEnter={() => soundEnabled && mouseEnterHandler(title)}
            >
              <img className="services-item-img" src={`./assets/images/services/${bg}_${theme}.svg`} alt={title}/>
              <h3 className="services-item-title">{title}</h3>
              <ul className={"services-item-tags-container"}>
                {
                  tags.map(item => (
                    <li key={item} className="services-item-tags-item">{item}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Services
