import React, { useState } from "react";
import { NAV_LINKS } from "../utils/constants";
import {
  playSound,
  scrollToTop,
  playTextToSound,
  saveToSessionStorage,
} from "../utils/utilFunctions";
import "../styles/Navbar.scss";

const Navbar = ({ props: { theme, soundEnabled, setSoundEnabled } }) => {
  let loc = window.location;
  const [active, setActive] = useState(loc.hash.split("#")[1] ?? "");
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      if (window.innerWidth > 720) {
        if (window.scrollY > lastScroll) {
          document.querySelector("header").style.transform =
            "translateY(-100px)";
        } else {
          document.querySelector("header").style.transform = "translateY(0px)";
        }
        lastScroll = window.scrollY;
      }
    });
  });

  const onChangeHandler = (selected) => {
    setActive(selected);
    setMenuOpen(false);
    if (soundEnabled) playSound("navigate");
  };

  const soundClickHandler = () => {
    let newSound = !soundEnabled;
    setSoundEnabled((soundEnabled) => !soundEnabled);
    saveToSessionStorage("sound", newSound);
    if (newSound) playSound("theme-toggle");
    playTextToSound(`Sound ${newSound ? "on" : "off"}`);
  };

  if (window.innerWidth > 720)
    return (
      <header>
        <nav className="nav-container">
          <div className="nav-logo-box">
            <a
              href="#home"
              onClick={() => {
                setActive("");
                scrollToTop();
              }}
            >
              <img
                className="nav-logo"
                alt="Aashish Kushwaha"
                src={`./assets/images/logo_${
                  theme === "light" ? "light" : "dark"
                }.svg`}
              />
            </a>
          </div>
          <ul className="nav-list">
            <div className="indicator" />
            {NAV_LINKS.map((item) => (
              <li
                key={item}
                onClick={() => onChangeHandler(item)}
                className={`nav-list__item ${active === item && "active-link"}`}
              >
                <a href={`#${item}`} className="nav-link">
                  {item}
                </a>
              </li>
            ))}
            <li
              className="sound_nav_item"
              title={`Turn ${soundEnabled ? "Off" : "On"} Sound`}
            >
              <i
                onClick={soundClickHandler}
                className={`fas ${
                  soundEnabled ? "fa-volume-up" : "fa-volume-mute"
                }`}
              />
            </li>
          </ul>
        </nav>
      </header>
    );
  else {
    return (
      <header id="home">
        <nav className="nav-container">
          <div className="nav-logo-box">
            <a
              href="#home"
              onClick={() => {
                setActive("");
                scrollToTop();
              }}
            >
              <img
                className="nav-logo"
                alt="Aashish Kushwaha"
                src={`./assets/images/logo_${
                  theme === "light" ? "light" : "dark"
                }.svg`}
              />
            </a>
          </div>
          <div
            className="hamberger-container"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </div>
          <ul
            className="hamberger-nav-list-container"
            style={{
              backfaceVisibility: "hidden",
              padding: menuOpen ? "1rem 4rem" : 0,
              height: menuOpen
                ? window.innerWidth < 601
                  ? "270px"
                  : "340px"
                : 0,
            }}
          >
            {NAV_LINKS.map((item) => (
              <li
                key={item}
                onClick={() => onChangeHandler(item)}
                className={`hamberger-nav-list__item ${
                  active === item && "hamberger-active-link"
                }`}
              >
                <a href={`#${item}`} className="hamberger-nav-link">
                  {item}
                </a>
              </li>
            ))}
            <li
              className="sound_nav_item"
              title={`Turn ${soundEnabled ? "Off" : "On"} Sound`}
            >
              <i
                onClick={soundClickHandler}
                className={`fas ${
                  soundEnabled ? "fa-volume-up" : "fa-volume-mute"
                }`}
              />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Navbar;
