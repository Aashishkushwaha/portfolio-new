import React from 'react'
import { playTextToSound } from '../utils/utilFunctions';
import '../styles/Mentorship.scss'

function Mentorship({props: { soundEnabled, mentorshipOpen, setMentorshipOpen}}) {
  const mouseEnterHandler = text => {
    playTextToSound(`check ${text}`)
  }

  const clickMentorshipDrawer = () => {
    let updatedMentorshipOpen = !mentorshipOpen

    if(updatedMentorshipOpen && soundEnabled)
      playTextToSound(`Praveen Saraogi, he's a frontend developer at PayTM`)
    setMentorshipOpen(updatedMentorshipOpen)
  }

  return (
    <section 
      className="mentorship-container" onMouseLeave={() => setMentorshipOpen(false)}
      style={{ transform: mentorshipOpen ? 'translate(0%, -50%)': 'translate(-100.5%, -50%)' }}
    >
      <aside className="mentorship-info-container">
        <div className="mentorship-info-img-box">
          <img src="./assets/images/praveen.jpeg" alt="praveen"/>
        </div>
        <div>
          <h4>Praveen Saraogi</h4>
          <p>Frontend Dev @ PayTM</p>
          <ul className="mentorship-info-links-container">
            {
              [
                { title:'twitter', url: 'https://twitter.com/saraogipraveen'},
                { title:'github', url: 'https://github.com/saraogipraveen'},
              ].map(({title, url}) => (
                <li key={title} className="mentorship-info-links-item flex"
                  onMouseEnter={() => soundEnabled && mouseEnterHandler(title)}
                  onFocus={() => soundEnabled && mouseEnterHandler(title)}
                >
                  <a href={url} target="_blank" rel="noreferrer">
                    <img src="./favicon.ico" alt={title} className="anchor-img"/>
                    <i className={`fab fa-${title}`} />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </aside>
      <div className="mentorship-indicator">
        <input type="checkbox" name="mentor" id="mentor"/>
        <label onClick={clickMentorshipDrawer} htmlFor="mentor">Thanks</label>
      </div>
    </section>
  )
}

export default Mentorship
