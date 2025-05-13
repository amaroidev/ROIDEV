import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-container">
      <div className="hero-image">
        <img src="/profile.jpg" alt="Richard Kwaku Opoku" className="profile-picture" />
      </div>
      <div className="hero-text">
        <h1>Hi, I'm Richard Kwaku Opoku</h1>
        <h2>200L Computer Science & Engineering Student</h2>
        <h3>University of Mines and Technology, Ghana</h3>
        <div className="hero-buttons">
          <a href="/RICHARD KWAKU OPOKU.pdf" className="download-cv" download>
            <FaDownload /> Download CV
          </a>
        </div>
        <div className="hero-social">
          <a href="https://github.com/FCM4100819823" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/richardkwakuopoku982" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ce-rkopoku9823@st.umat.edu.gh">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;