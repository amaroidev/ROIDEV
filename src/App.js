import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import SideNav from './SideNav';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [isSideNavVisible, setSideNavVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleSideNav = () => {
    setSideNavVisible(!isSideNavVisible);
    // Toggle body class for overlay effect
    document.body.classList.toggle('sidenav-open', !isSideNavVisible);
  };

  const closeSideNav = () => {
    setSideNavVisible(false);
    document.body.classList.remove('sidenav-open');
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="sidenav-toggle" onClick={toggleSideNav}>
        <FaBars />
      </button>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      {isSideNavVisible && (
        <>
          <div className="sidenav-overlay" onClick={closeSideNav}></div>
          <SideNav closeSideNav={closeSideNav} />
        </>
      )}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
