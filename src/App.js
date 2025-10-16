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
  const [isTransitioning, setIsTransitioning] = useState(false);

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
            console.log('Element entering view:', entry.target.className);
            entry.target.classList.add('in-view');
            
            // Animate children elements with stagger
            const children = entry.target.querySelectorAll('.animate-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    // Add reveal class to all sections
    const sections = document.querySelectorAll('.hero, .about, .skills, .projects, .contact');
    sections.forEach((sec) => {
      sec.classList.add('reveal');
      observer.observe(sec);
    });
    
    // Observe individual elements for more granular animations
    const animateElements = document.querySelectorAll('.section-title, .project-card, .skill-category, .stat-item, .detail-item');
    animateElements.forEach((el) => {
      el.classList.add('animate-child');
      observer.observe(el);
    });

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

  // Smooth section transitions on navigation
  useEffect(() => {
    const handleNavClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      e.preventDefault();
      const targetId = target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        setIsTransitioning(true);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className={`App ${isDarkMode ? 'dark' : 'light'} ${isTransitioning ? 'transitioning' : ''}`}>
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
