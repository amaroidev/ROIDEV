import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "HTML & CSS", "Java"]
    },
    {
      title: "Frontend",
      skills: ["React", "CSS3", "Canvas", "Figma"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "SQL & NoSQL Databases"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "RESTful APIs", "AWS", "Bash"]
    },
    {
      title: "Specializations",
      skills: ["A-Frame", "Virtual Reality (VR) Development", "JavaFX", "Graphic Design"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-name">{skill}</div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: `${Math.floor(Math.random() * 30) + 70}%`
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