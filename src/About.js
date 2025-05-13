import React from 'react';
import './About.css';

const About = () => (
  <section id="about" className="about">
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="welcome">
            Welcome to My Portfolio <span className="wave">👋</span>
          </p>
          <p className="description">
            Hi there! I'm Richard Kwaku Opoku, a passionate 200L Computer Science and Engineering student. I love solving
            problems, building innovative solutions, and contributing to open-source projects. This portfolio showcases
            some of my work, skills, and achievements.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-icon">🎓</span>
              <span className="detail-text">Computer Science & Engineering Student</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🏫</span>
              <span className="detail-text">University of Mines and Technology, Ghana</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">💻</span>
              <span className="detail-text">Full Stack Developer</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🎨</span>
              <span className="detail-text">Graphic Designer</span>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;