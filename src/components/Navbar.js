import React, { useState } from 'react'
import { NAV_LINKS } from '../utils/constants'
import { playSound, playTextToSound, saveToSessionStorage } from '../utils/utilFunctions'
import "../styles/Navbar.scss"

const Navbar = ({props: {theme, soundEnabled, setSoundEnabled}}) => {
  let loc = window.location
  const [active, setActive] = useState(loc.hash.split("#")[1] ?? '')
  
  const onChangeHandler = (selected) => {
    setActive(selected)
    if(soundEnabled)
      playSound("navigate")
  }

  const soundClickHandler = () => {
    let newSound = !soundEnabled
    setSoundEnabled(soundEnabled => !soundEnabled)
    saveToSessionStorage("sound", newSound)
    if(newSound)
      playSound("theme-toggle")
    playTextToSound(`Sound ${newSound ? 'on': 'off'}`)
  }
  
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  if(window.innerWidth > 680)
    return (
      <header>
        <nav className="nav-container">
          <div className="nav-logo-box">
            <img 
              onClick={scrollToTop}
              className="nav-logo" src={`./assets/images/logo_${theme === "light" ? 'light' : 'dark'}.svg`} alt="Aashish Kushwaha"/>
          </div>
          <ul className="nav-list">
            {
              NAV_LINKS.map(item => (
                <li key={item} onClick={() => onChangeHandler(item)} 
                  className={`nav-list__item ${active === item && 'active-link'}`}
                >
                  <a href={`#${item}`} className="nav-link">{item}</a>
                </li>
              ))
            }
            <li className="sound_nav_item" title={`Turn ${soundEnabled ? 'Off': 'On'} Sound`}>
              <i 
                onClick={soundClickHandler}
                className={`fas ${soundEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`} 
              />
            </li>
          </ul>
        </nav>
      </header>
    )
  else {
    return (
      <header>
        <nav className="nav-container">
          <div className="nav-logo-box">
            <img 
              onClick={scrollToTop}
              className="nav-logo" src={`./assets/images/logo_${theme === "light" ? 'light' : 'dark'}.svg`} alt="Aashish Kushwaha"/>
          </div>
          <div className="hamberger-container">
            <span />
            <span />
            <span />
          </div>
          <ul className="hamberger-nav-list-container">
            {
              NAV_LINKS.map(item => (
                <li key={item} onClick={() => onChangeHandler(item)} 
                  className={`nav-list__item ${active === item && 'active-link'}`}
                >
                  <a href={`#${item}`} className="nav-link">{item}</a>
                </li>
              ))
            }
            <li className="sound_nav_item" title={`Turn ${soundEnabled ? 'Off': 'On'} Sound`}>
              <i 
                onClick={soundClickHandler}
                className={`fas ${soundEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`} 
              />
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar
