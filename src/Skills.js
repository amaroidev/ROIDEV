import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: [
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Python", level: 82 },
        { name: "C/C++", level: 72 },
        { name: "Java", level: 68 }
      ]
    },
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React & Hooks", level: 85 },
        { name: "React Native", level: 78 },
        { name: "HTML5 & Modern CSS", level: 90 },
        { name: "UI/UX Prototyping (Figma)", level: 80 }
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js & Express", level: 76 },
        { name: "Python Flask", level: 72 },
        { name: "REST & GraphQL APIs", level: 70 },
        { name: "SQL (PostgreSQL) & MongoDB", level: 68 }
      ]
    },
    {
      title: "Embedded & Hardware",
      skills: [
        { name: "Arduino & AVR", level: 86 },
        { name: "ESP32 & IoT Prototyping", level: 82 },
        { name: "Sensor Integration (I2C/SPI)", level: 75 },
        { name: "PCB Design (Proteus)", level: 60 }
      ]
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git, GitHub & GitLab", level: 88 },
        { name: "CI/CD (Vercel, Netlify)", level: 76 },
        { name: "Testing (Jest/PyTest)", level: 66 },
        { name: "Agile & Technical Writing", level: 72 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${isVisible ? 'animate' : ''}`}
                        style={{
                          '--target-width': `${skill.level}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;