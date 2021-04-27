import React, { useEffect, memo } from 'react'
import { configureTheme, playSound, playTextToSound, saveToLocalStorage } from '../utils/utilFunctions'
import "../styles/ThemeToggler.scss"

const ThemeToggler = ({ props: {theme, setTheme, soundEnabled }}) => {
  
  const toggleTheme = () => {
    let newTheme = theme === "light"? "dark": "light"
    saveToLocalStorage("theme", newTheme)
    setTheme(newTheme)
    if(soundEnabled) {
      playSound("theme-toggle")
      playTextToSound(`${newTheme} mode`)
    }
  }

  useEffect(() => {
    configureTheme(theme)
  }, [theme])

  const activeTheme = theme === "dark" ? "dark" : "light"

  return (
    <div className={`container ${activeTheme} flex`}>
      <div
        className={`inner ${activeTheme} flex`}
        style={{
          background: theme === "dark" ? "rgba(29,161,242,.3)" : "rgba(49,22,22,.1)"
        }}
      >
        <input type="checkbox" id="switch" checked={theme === "dark"} onChange={() => {}}/>
        <label
          onClick={toggleTheme}
          htmlFor="switch"
          className={`switch ${activeTheme}`}
        />
      </div>
    </div>
  );
}

export default memo(ThemeToggler)
