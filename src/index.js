import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import './styles/animations.scss';
import './styles/utility.scss';
import './index.css';
import App from './App';
import Typed from 'typed.js'
import reportWebVitals from './reportWebVitals';

dotenv.config()

window.addEventListener('DOMContentLoaded', () => {
  var options = {
    strings: [
      "Create amazing and interactive web applications.",
      "Creative web developer who loves building frontends."
    ],
    typeSpeed: 30,
    backSpeed: 25,
    loop: true,
    showCursor: false
  };
  
  new Typed('.home-dev-work-des', options);
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
