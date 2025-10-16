import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  React.useEffect(() => {
    const icons = document.querySelectorAll('.magnetic-icon');
    icons.forEach(icon => {
      icon.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;
        const x = (offsetX / clientWidth - 0.5) * 30;
        const y = (offsetY / clientHeight - 0.5) * 30;
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translate(0, 0)';
      });
    });
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Richard Kwaku Opoku" className="profile-picture" />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm Richard Kwaku Opoku</h1>
          <h2>300L Computer Science & Engineering Student</h2>
          <h3>University of Mines and Technology, Ghana</h3>
          <div className="hero-buttons">
            <a href={process.env.PUBLIC_URL + '/RICHARD KWAKU OPOKU.pdf'} className="download-cv" download>
              <FaDownload /> Download CV
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/amaroidev" target="_blank" rel="noopener noreferrer" className="magnetic-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/richardkwakuopoku982" target="_blank" rel="noopener noreferrer" className="magnetic-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:ce-rkopoku9823@st.umat.edu.gh" className="magnetic-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;