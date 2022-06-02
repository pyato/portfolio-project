import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine'
    });
  }, [])

  return (
    <div>
      <Navbar />
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
    </div>

  );
}

export default App;
