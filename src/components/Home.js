import React from 'react'
import Button from './Button'
import '../styles/Home.scss'

const Home = ({theme}) => {
  return (
    <section className="home" id="home">
      <article className="home-dev-info">
        <p className="home-dev-intro">Hey Viewer<span className="wave wave-animation">👋</span> I'm,  
          <span className="mx-8 inline-block name">Aashish</span>
        </p>
        <h1 className="primary-heading moving-background">
          <span className="highlight" style={{zIndex: -1}}/>
          Web Developer
        </h1>
        <div className="home-dev-work-des-wrapper">
          <p className="home-dev-work-des" />
        </div>
        <div className="home-dev-buttons-container">
          <Button label="See My Work"/>
          <Button label="Contact Me" type="secondary"/>
        </div>
      </article>
      <div className="home-illustration">
        <img src={`./assets/images/web-developer-${theme === "light" ? 'light' : 'dark'}.svg`} alt="illustration"/>
        <span className="home-illustration-shadow"></span>
      </div>
    </section>
  )
}

export default Home
