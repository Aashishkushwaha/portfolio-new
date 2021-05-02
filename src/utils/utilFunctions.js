import { THEME_CONFIG, TOAST_CONFIG, audio, textToSpeech } from './constants'
import { toast } from 'react-toastify'

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(`APP-${key}`, value)
}

export const getFromLocalStorage = key => localStorage.getItem(`APP-${key}`)

export const saveToSessionStorage = (key, value) => {
  sessionStorage.setItem(`APP-${key}`, value)
}

export const getFromSessionStorage = key => sessionStorage.getItem(`APP-${key}`)

export const configureTheme = (theme) => {
  document.getElementById("favicon").href = `/favicon_${theme}.ico`
  let rootElement = document.querySelector('html')
  rootElement.style.setProperty('--primary-background', THEME_CONFIG[theme].primaryBackground)
  rootElement.style.setProperty('--primary-text', THEME_CONFIG[theme].primaryText)
  rootElement.style.setProperty('--secondary-background', THEME_CONFIG[theme].secondaryBackground)
  rootElement.style.setProperty('--secondary-background-dark', THEME_CONFIG[theme].secondaryBackgroundDark)
  rootElement.style.setProperty('--link-color', THEME_CONFIG[theme].linkColor)
}

const clearsound = () => {
  audio.pause();
  audio.src = "";
}

export const playSound = (soundsrc, soundEnabled = true) => {
  clearsound();
  if(soundEnabled && soundsrc) {
    audio.src = `./assets/sounds/${soundsrc}.mp3`;
    audio.volume = 1;
    audio.play();
  }
}

export const playTextToSound = text => {
  if('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    textToSpeech.text = text;
    // textToSpeech.rate = 1;
    // textToSpeech.pitch = 1;
    window.speechSynthesis.speak(textToSpeech);
    textToSpeech.onend = function(e) {
      window.speechSynthesis.cancel();
    }
  }
}

export const pauseTextToSound = () => {
  if('speechSynthesis' in window) { 
    window.speechSynthesis.cancel();
  }
}

export const showToastMessage = (msg, type) => {
  toast[type](msg, TOAST_CONFIG);
}