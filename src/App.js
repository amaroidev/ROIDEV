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
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleSideNav = () => {
    setSideNavVisible(!isSideNavVisible);
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
      {isSideNavVisible && <SideNav />}
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
