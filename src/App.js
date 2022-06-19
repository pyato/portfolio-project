import './App.css';
import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AOS from 'aos';
import "aos/dist/aos.css";
import { ExperienceContext } from './contexts/experienceContext';

function App() {
  const expContext = useContext(ExperienceContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine'
    });
  }, [])

  return (
    <div>
      <div className="wrapper-navbar">
        <Navbar />
      </div>
      <div className="wrapper-about">
        <About />
      </div>
      <div className="wrapper-skills">
        <Skills />
      </div>
      <div className="wrapper-experience">
        <Experience />
        <Contact />
      </div>
      {expContext.viewMore ?
        <div
          className="graduate-bg"
          onClick={() => expContext.setViewMore(false)}
        ></div>
        :
        <></>
      }
    </div>

  );
}

export default App;
