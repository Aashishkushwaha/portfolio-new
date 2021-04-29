import { useState } from "react"
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Mentorship from "./components/Mentorship";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import ThemeToggler from "./components/ThemeToggler";
import {getFromLocalStorage, getFromSessionStorage } from "./utils/utilFunctions";
import Contact from "./components/Contact";

const App = () => {
  const [theme, setTheme] = useState(getFromLocalStorage("theme") || "light");
  const [soundEnabled, setSoundEnabled] = useState(JSON.parse(getFromSessionStorage("sound")) ?? true);
  const [mentorshipOpen, setMentorshipOpen] = useState(false);
  
  return (
    <>
      <Mentorship props={{soundEnabled, mentorshipOpen, setMentorshipOpen}}/>
      <Navbar props={{theme, soundEnabled, setSoundEnabled}}/>
      <ThemeToggler props={{theme, setTheme, soundEnabled}}/>
      <Home theme={theme}/>
      <Projects props={{theme, soundEnabled}}/>
      <Skills props={{theme, soundEnabled}}/>
      <Services props={{theme, soundEnabled}}/>
      <About props={{theme, soundEnabled}}/>
      <Contact props={{theme, soundEnabled}}/>
      <Footer props={{soundEnabled}}/>
    </>
  );
}

export default App;
