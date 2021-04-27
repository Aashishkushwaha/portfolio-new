import React from 'react'
import { SOCIAL_CONNECT } from '../utils/constants'
import { playTextToSound } from '../utils/utilFunctions'
import "../styles/Footer.scss"

const Footer = ({props:{soundEnabled}}) => {
  const mouseEnterHandler = text => {
    playTextToSound(`check ${text}`)
  }

  return (
    <footer className="footer-section">
      <h5 className="footer-copyright" 
        onMouseEnter={() => soundEnabled && playTextToSound("Designed by Aashish Kushwaha.")}
      >&copy; 2021 | Aashish Kushwaha</h5>
      <ul className="footer-links">
        {
          SOCIAL_CONNECT.map(({title, url}) => (
            <li className="footer-link-item" key={title}
              onMouseEnter={() => soundEnabled && mouseEnterHandler(title)}
              onFocus={() => soundEnabled && mouseEnterHandler(title)}
            >
              <a target="_blank" rel="noreferrer" href={url}>
                <i className={`fab fa-${title}`} />
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}

export default Footer
