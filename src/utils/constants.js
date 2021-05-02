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

export const PROJECTS = [
  {
    title: "Memories App",
    imgUrl: "./assets/images/projects/memories.png",
    liveUrl: "https://memories-mernapp.netlify.app",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Aashishkushwaha/memories",
    description: "A simple MERN Stack application which is created to add the special memories which you'll cherish to your entire life.",
  },
  {
    title: "Stay Focused",
    tags: ["Javascript", "HTML", "CSS"],
    liveUrl: "https://stay-focused.vercel.app",
    imgUrl: "./assets/images/projects/stayFocused.png",
    githubUrl: "https://github.com/Aashishkushwaha/STAY_FOCUSED",
    description: "A Javascript application which will help you to stay focused to finish your work within the time, you can also add the task to the todo tasks list.",
  },
  {
    title: "Colorify",
    tags: ["React.js", "CSS"],
    liveUrl: "https://colorify-react.netlify.app",
    imgUrl: "./assets/images/projects/colorify.png",
    githubUrl: "https://github.com/Aashishkushwaha/colorify",
    description: "A React.js application where you can find lot of colours, gradients & shades of colours which you can use for different purposes.",
  },
  {
    title: "Quiz App",
    tags: ["React.js", "Material UI", "Charts"],
    description: "A React.js quiz app where you can test your knowledge of various topics such as Science, Politics, Sports, Movies & much more.",
    liveUrl: "https://playquizapp.netlify.app",
    githubUrl: "https://github.com/Aashishkushwaha/Quizapp",
    imgUrl: "./assets/images/projects/playQuiz.png"
  },
  {
    title: "Drum Machine",
    tags: ["React.js", "CSS", "Audio"],
    liveUrl: "https://react-drumkit.netlify.app",
    imgUrl: "./assets/images/projects/drumMachine.png",
    githubUrl: "https://github.com/Aashishkushwaha/drum-machine",
    description: "A javascript application which is like a small instrument widget which will produce sound like drum on every press of the keyboard key.",
  },
  {
    title: "CSS Work",
    tags: ["CSS", "Responsive Web Design"],
    description: "A simple webpage which is modern, responsive, interactive & pleasing for the eyes. It also showcases the latest and modern design patterns, such as responsive images, solid gradients, animations and many more.",
    liveUrl: "https://csswork.netlify.app",
    imgUrl: "./assets/images/projects/cssWork.png",
    githubUrl: "https://github.com/Aashishkushwaha/responsive_page",
  },
]

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
  `I create scalable & interactive User Interfaces with help of modern technologies.`,
  `I create website which are responsive & effectively performant with respect to different device sizes & resolutions.`,
  `I create websites which are more realistic & minimalistic in design.`,
  `I also work on Progressive Web Application (PWA's) development as well.`
]

export const TOAST_CONFIG = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: 0,
}