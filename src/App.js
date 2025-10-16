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
import CursorFollower from './CursorFollower';
import ParticlesBackground from './ParticlesBackground';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [isSideNavVisible, setSideNavVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('.hero, .about, .skills, .projects, .contact');
    sections.forEach((sec) => sec.classList.add('reveal'));
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Back-to-top visibility on scroll
  useEffect(() => {
    const onScroll = () => {
      setShowToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <ParticlesBackground />
      <CursorFollower />
      <button className={`sidenav-toggle ${isSideNavVisible ? 'active' : ''}`} onClick={toggleSideNav}>
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
      {showToTop && (
        <button
          className="to-top-btn"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
