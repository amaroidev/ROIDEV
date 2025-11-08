import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import Laptop3D from './Laptop3D';

const Hero = () => {
  React.useEffect(() => {
    const icons = document.querySelectorAll('.magnetic-icon');
    const listeners = [];

    icons.forEach((icon) => {
      const handleMove = (event) => {
        const rect = icon.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

        const translateX = relativeX * 20;
        const translateY = relativeY * 20;

        icon.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      };

      const handleLeave = () => {
        icon.style.transform = 'translate3d(0, 0, 0)';
      };

      icon.addEventListener('mousemove', handleMove);
      icon.addEventListener('mouseleave', handleLeave);

      listeners.push({ icon, handleMove, handleLeave });
    });

    return () => {
      listeners.forEach(({ icon, handleMove, handleLeave }) => {
        icon.removeEventListener('mousemove', handleMove);
        icon.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Laptop in top-right corner */}
      <div className="laptop-corner">
        <Laptop3D />
      </div>

      <div className="hero-container">
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Richard Kwaku Opoku" className="profile-picture" />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm Richard Kwaku Opoku</h1>
          <h2>Full‑Stack Developer | CE Student</h2>
          <h3>University of Mines and Technology, Ghana</h3>
          <div className="hero-buttons">
            <a href={process.env.PUBLIC_URL + '/RICHARD KWAKU OPOKU.pdf'} className="download-cv" download>
              <FaDownload /> Download CV
            </a>
          </div>
          <div className="hero-social">
            <a
              href="https://github.com/amaroidev"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-icon"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/richardkwakuopoku982"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-icon"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:ce-rkopoku9823@st.umat.edu.gh"
              className="magnetic-icon"
              aria-label="Send me an email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
      {/* Static glass overlay badge */}
      <div className="availability-badge">
        <div className="badge-glow"></div>
        <span className="status-dot"></span>
        Available for opportunities
      </div>
    </section>
  );
};

export default Hero;