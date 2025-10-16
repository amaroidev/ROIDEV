import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "React Native", level: 85 },
        { name: "CSS3", level: 90 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Flask", level: 80 },
        { name: "SQL & NoSQL", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Bash", level: 75 }
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "A-Frame", level: 85 },
        { name: "VR Development", level: 80 },
        { name: "JavaFX", level: 75 },
        { name: "Graphic Design", level: 85 }
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