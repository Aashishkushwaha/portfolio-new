export const THEME_CONFIG = {
  light: {
    primaryBackground: "#fff",
    secondaryBackground: "#3b885b",
    secondaryBackgroundDark: "#2b6744",
    primaryText: "#17212d",
    linkColor: "#17212d",
  },
  dark: {
    primaryBackground: "#17212d",
    primaryText: "#ececec",
    secondaryBackground: "#1da1f2",
    linkColor: "#ececec",
    secondaryBackgroundDark: "#0d87d2",
  },
};

export const audio = new Audio();

export const textToSpeech = new SpeechSynthesisUtterance();

export const NAV_LINKS = ["projects", "skills", "services", "about", "contact"];

export const PROJECTS = [
  {
    title: "The Millionaire's Quiz",
    imgUrl: "./assets/images/projects/memories/memories.png",
    liveUrl: "https://the-millionaires-quiz.vercel.app/",
    tags: ["React.js", "Javascript", "CSS", "HTML"],
    githubUrl: "https://github.com/Aashishkushwaha/The-Millionaires-Quiz",
    description:
      "It is a simulation of the game KBC created with help of reactJS. You'll be asked a series of questions to test your general knowledge and if you answered correctly then you will win the points (pseudo money) for that question.",
    responsiveImages: [
      {
        media: "(max-width: 420px)",
        srcSet:
          "./assets/images/projects/theMillionairesQuiz/theMillionairesQuiz_420.png",
      },
      {
        media: "(max-width: 640px)",
        srcSet:
          "./assets/images/projects/theMillionairesQuiz/theMillionairesQuiz_640.png",
      },
      {
        media: "(max-width: 768px)",
        srcSet:
          "./assets/images/projects/theMillionairesQuiz/theMillionairesQuiz_768.png",
      },
      {
        media: "(max-width: 1280px)",
        srcSet:
          "./assets/images/projects/theMillionairesQuiz/theMillionairesQuiz_1280.png",
      },
      {
        media: "(min-width: 1280px)",
        srcSet:
          "./assets/images/projects/theMillionairesQuiz/theMillionairesQuiz_desktop_1280.png",
      },
    ],
  },
  {
    title: "Memories App",
    imgUrl: "./assets/images/projects/memories/memories.png",
    liveUrl: "https://memories-mernapp.netlify.app",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Aashishkushwaha/memories",
    description:
      "A simple MERN Stack application which is created to add the special memories which you'll cherish to your entire life.",
    responsiveImages: [
      {
        media: "(max-width: 420px)",
        srcSet: "./assets/images/projects/memories/memories_420.png",
      },
      {
        media: "(max-width: 640px)",
        srcSet: "./assets/images/projects/memories/memories_640.png",
      },
      {
        media: "(max-width: 768px)",
        srcSet: "./assets/images/projects/memories/memories_768.png",
      },
      {
        media: "(max-width: 1280px)",
        srcSet: "./assets/images/projects/memories/memories_1280.png",
      },
      {
        media: "(min-width: 1280px)",
        srcSet: "./assets/images/projects/memories/memories_desktop_1280.png",
      },
    ],
  },
  {
    title: "Stay Focused",
    tags: ["MERN", "HTML", "CSS"],
    liveUrl: "https://stay-focused.vercel.app",
    imgUrl: "./assets/images/projects/stayFocused/stayFocused.png",
    githubUrl: "https://github.com/Aashishkushwaha/STAY_FOCUSED",
    description:
      "A Javascript application which will help you to stay focused to finish your work within the time, you can also add the task to the todo tasks list.",
    responsiveImages: [
      {
        media: "(max-width: 420px)",
        srcSet: "./assets/images/projects/stayFocused/stayFocused_420.png",
      },
      {
        media: "(max-width: 640px)",
        srcSet: "./assets/images/projects/stayFocused/stayFocused_640.png",
      },
      {
        media: "(max-width: 768px)",
        srcSet: "./assets/images/projects/stayFocused/stayFocused_768.png",
      },
      {
        media: "(max-width: 1280px)",
        srcSet: "./assets/images/projects/stayFocused/stayFocused_1280.png",
      },
      {
        media: "(min-width: 1280px)",
        srcSet:
          "./assets/images/projects/stayFocused/stayFocused_desktop_1280.png",
      },
    ],
  },
  {
    title: "Colorify",
    tags: ["React.js", "Progressive Web App (PWA)", "CSS"],
    liveUrl: "https://colorify-react.netlify.app",
    imgUrl: "./assets/images/projects/colorify.png",
    githubUrl: "https://github.com/Aashishkushwaha/colorify",
    description:
      "A React.js application where you can find lot of colours, gradients & shades of colours which you can use for different purposes.",
    responsiveImages: [
      {
        media: "(max-width: 420px)",
        srcSet: "./assets/images/projects/colorify/colorify_420.png",
      },
      {
        media: "(max-width: 640px)",
        srcSet: "./assets/images/projects/colorify/colorify_640.png",
      },
      {
        media: "(max-width: 768px)",
        srcSet: "./assets/images/projects/colorify/colorify_768.png",
      },
      {
        media: "(max-width: 1280px)",
        srcSet: "./assets/images/projects/colorify/colorify_1280.png",
      },
      {
        media: "(min-width: 1280px)",
        srcSet: "./assets/images/projects/colorify/colorify_desktop_1280.png",
      },
    ],
  },
  {
    title: "Quiz App",
    tags: ["React.js", "Material UI", "Charts"],
    description:
      "A React.js quiz app where you can test your knowledge of various topics such as Science, Politics, Sports, Movies & much more.",
    liveUrl: "https://playquizapp.netlify.app",
    githubUrl: "https://github.com/Aashishkushwaha/Quizapp",
    imgUrl: "./assets/images/projects/playQuiz/playQuiz.png",
    responsiveImages: [
      {
        media: "(max-width: 420px)",
        srcSet: "./assets/images/projects/playQuiz/playQuiz_420.png",
      },
      {
        media: "(max-width: 640px)",
        srcSet: "./assets/images/projects/playQuiz/playQuiz_640.png",
      },
      {
        media: "(max-width: 768px)",
        srcSet: "./assets/images/projects/playQuiz/playQuiz_768.png",
      },
      {
        media: "(max-width: 1280px)",
        srcSet: "./assets/images/projects/playQuiz/playQuiz_1280.png",
      },
      {
        media: "(min-width: 1280px)",
        srcSet: "./assets/images/projects/playQuiz/playQuiz_desktop_1280.png",
      },
    ],
  },
  {
    title: "Drum Machine",
    tags: ["React.js", "CSS", "Audio"],
    liveUrl: "https://react-drumkit.netlify.app",
    imgUrl: "./assets/images/projects/drumMachine/drumMachine.png",
    githubUrl: "https://github.com/Aashishkushwaha/drum-machine",
    description:
      "A javascript application which is like a small instrument widget which will produce sound like drum on every press of the keyboard key.",
    responsiveImages: [
      {
        media: "(max-width: 420px)",
        srcSet: "./assets/images/projects/drumMachine/drumMachine_420.png",
      },
      {
        media: "(max-width: 640px)",
        srcSet: "./assets/images/projects/drumMachine/drumMachine_640.png",
      },
      {
        media: "(max-width: 768px)",
        srcSet: "./assets/images/projects/drumMachine/drumMachine_768.png",
      },
      {
        media: "(max-width: 1280px)",
        srcSet: "./assets/images/projects/drumMachine/drumMachine_1280.png",
      },
      {
        media: "(min-width: 1280px)",
        srcSet:
          "./assets/images/projects/drumMachine/drumMachine_desktop_1280.png",
      },
    ],
  },
  {
    title: "CSS Work",
    tags: ["CSS", "Responsive Web Design"],
    description:
      "A simple webpage which is modern, responsive, interactive & pleasing for the eyes. It also showcases the latest and modern design patterns, such as responsive images, solid gradients, animations and many more.",
    liveUrl: "https://csswork.netlify.app",
    imgUrl: "./assets/images/projects/cssWork/cssWork.png",
    githubUrl: "https://github.com/Aashishkushwaha/responsive_page",
    responsiveImages: [
      {
        media: "(max-width: 420px)",
        srcSet: "./assets/images/projects/cssWork/cssWork_420.png",
      },
      {
        media: "(max-width: 640px)",
        srcSet: "./assets/images/projects/cssWork/cssWork_640.png",
      },
      {
        media: "(max-width: 768px)",
        srcSet: "./assets/images/projects/cssWork/cssWork_768.png",
      },
      {
        media: "(max-width: 1280px)",
        srcSet: "./assets/images/projects/cssWork/cssWork_1280.png",
      },
      {
        media: "(min-width: 1280px)",
        srcSet: "./assets/images/projects/cssWork/cssWork_desktop_1280.png",
      },
    ],
  },
];

export const SKILLS = [
  "JavaScript",
  "React.js",
  "Redux.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "Github",
  "HTML",
  "CSS",
  "jQuery",
  "Sass",
  "Heroku",
];

export const SOCIAL_CONNECT = [
  { title: "whatsapp", url: `https://wa.me/917709609778?text=Hello%20Aashish` },
  { title: "linkedin", url: "https://www.linkedin.com/in/aashish-kushwaha" },
  { title: "github", url: "https://github.com/Aashishkushwaha" },
  { title: "twitter", url: "https://twitter.com/aashish__7" },
];

export const SERVICES = [
  {
    title: "Responsive Websites",
    bg: "RWD",
    tags: ["Responsive", "interactive", "Scalable"],
  },
  {
    title: "MERN Stack Applications",
    bg: "React",
    tags: ["MERN", "SPA", "Website"],
  },
  {
    title: "UI Development",
    bg: "UI_Design",
    tags: ["Interface", "UI", "Design"],
  },
];

export const ABOUT_INFO = [
  `I'm a self-taught JavaScript (MERN stack) developer.`,
  `I create scalable & interactive User Interfaces with help of modern technologies.`,
  `I create website which are responsive & effectively performant with respect to different device sizes & resolutions.`,
  `I create websites which are more realistic & minimalistic in design.`,
  `I also work on Progressive Web Application (PWA's) development as well.`,
];

export const TOAST_CONFIG = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: 0,
};
