export const THEME_CONFIG = {
  light: {
    primaryBackground: '#efefef',
    secondaryBackground: '#3b885b',
    secondaryBackgroundDark: '#2b6744',
    primaryText: '#17212d',
    linkColor: '#17212d',
  },
  dark: {
    primaryBackground: '#17212d',
    primaryText: '#ececec',
    secondaryBackground: '#1da1f2',
    linkColor: '#ececec',
    secondaryBackgroundDark: '#0d87d2'
  }
}

export const audio = new Audio();

export const textToSpeech = new SpeechSynthesisUtterance();

export const NAV_LINKS = ['projects', 'skills', 'services', 'about', 'contact']

export const SKILLS = [
  "JavaScript", "React.js", "Redux.js",
  "Node.js", "Express.js", "MongoDB", 
  "Git", "Github","HTML", "CSS",
  "jQuery", "Sass", "Heroku"
]

export const SOCIAL_CONNECT = [
  { title: 'linkedin', url: 'https://www.linkedin.com/in/aashish-kushwaha' },
  { title: 'github', url: 'https://github.com/Aashishkushwaha' },
  { title: 'twitter', url: 'https://twitter.com/aashish__7' },
  { title: 'instagram', url: 'https://www.instagram.com/aashish.kushwaha7' },
]

export const SERVICES = [
  {
    title: "Responsive Websites",
    bg: "RWD",
    tags: ["Responsive", "interactive", "Scalable"]
  },
  {
    title: "MERN Stack Applications",
    bg: "React",
    tags: ["MERN", "SPA", "Website"]
  },
  { 
    title: "UI Development", 
    bg: "UI_Design",
    tags: [ "Interface", "UI", "Design" ]
  }
]

export const ABOUT_INFO = [
  `I'm a self-taught JavaScript (MERN stack) developer.`,
  `I create scalable & interactive User Interafaces with help of modern technologies.`,
  `I create website which are responsive & effectively performant with respect to different device sizes & resolutions.`,
  `I create websites which are more realistic & minimalistic in design.`,
  `I also work on Progressive Web Application (PWA's) development as well.`
]