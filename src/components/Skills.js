import React from "react";
import { SKILLS } from "../utils/constants";
import { playTextToSound, shuffleArray } from "../utils/utilFunctions";
import "../styles/Skills.scss";

const Skills = ({ props: { theme, soundEnabled } }) => {
  const mouseEnterHandler = (text) => {
    playTextToSound(text);
  };

  return (
    <section className="section" id="skills">
      <h2 className="section__heading align-center">Skills</h2>
      <h3 className="section__heading-info">
        During my self learning journey I've gained knowledge in below
        technologies.
      </h3>
      <div className="skills-illustration-container">
        <img
          className="skills-illustration"
          src={`./assets/images/skills_${theme}.svg`}
          alt="skills"
        />
      </div>
      <div className={`slider slider-${theme}`}>
        <div className="slide-track">
          {shuffleArray(SKILLS).map((skill) => {
            return (
              <div
                key={skill}
                className={`slide skills-item skills-item-${theme} flex`}
                onMouseEnter={() => soundEnabled && mouseEnterHandler(skill)}
              >
                <img
                  className="skills-item-img"
                  src={`./assets/images/skills/${skill}.svg`}
                  alt={skill}
                />
                <h1 className={`skills-item-text`}>{skill}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
