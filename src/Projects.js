import React, { useState } from 'react';
import './Projects.css';
import './Slideshow.css';

const Projects = () => {
  const projects = [
    {
      title: 'Inventory System Management',
      description: 'A backend repository for a chemical factory, featuring employee management, inventory tracking, and RESTful API endpoints.',
      link: 'https://github.com/FCM4100819823/Inventory_System_Management',
      slides: [
        { src: '/images/inventory1.png', alt: 'Inventory Dashboard' },
        { src: '/images/inventory2.png', alt: 'Employee Management' },
        { src: '/images/inventory3.png', alt: 'Inventory Tracking' }
      ]
    },
    {
      title: 'School Management System',
      description: 'A School Management CRUD Application built with Flask and Microsoft SQL Server.',
      link: 'https://github.com/FCM4100819823/SDMSFLASK',
      slides: [
        { src: '/images/sdms1.png', alt: 'Dashboard' },
        { src: '/images/sdms2.png', alt: 'Student Records' },
        { src: '/images/sdms3.png', alt: 'Add Student Form' }
      ]
    },
    {
      title: '3D Virtual Environment',
      description: 'An interactive 3D virtual environment created with A-Frame, featuring furniture, animations, and a 360-degree background.',
      link: 'https://github.com/FCM4100819823/A-Frame',
      slides: [
        { src: '/images/aframe1.jpg', alt: '3D Scene Overview' },
        { src: '/images/aframe2.jpg', alt: 'Furniture Models' },
        { src: '/images/aframe3.jpg', alt: 'Animated Elements' }
      ]
    },
    {
      title: 'Canva Design Portfolio',
      description: 'A collection of professional graphic design projects created using Canva, showcasing creativity and design expertise.',
      link: 'https://www.canva.com/design/DAGm8mxrr6o/_LxihyDZW0iFPFNJL-_oeA/edit?utm_content=DAGm8mxrr6o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      slides: [
        { src: '/images/canva1.png', alt: 'Social Media Post Design' },
        { src: '/images/canva2.png', alt: 'Business Card Design' },
        { src: '/images/canva3.png', alt: 'Presentation Slide Design' }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects[activeProject].slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects[activeProject].slides.length) % projects[activeProject].slides.length);
  };

  const handleProjectClick = (index) => {
    setActiveProject(index);
    setCurrentSlide(0); // Reset to first slide when changing projects
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-content">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              onClick={() => handleProjectClick(index)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {project.slides && (
                <div className="slideshow">
                  <button className="slide-btn prev-btn" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <img
                    src={project.slides[currentSlide].src}
                    alt={project.slides[currentSlide].alt}
                    className="slide-image"
                  />
                  
                  <button className="slide-btn next-btn" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  <div className="slide-indicators">
                    {project.slides.map((_, dotIndex) => (
                      <span 
                        key={dotIndex} 
                        className={`slide-dot ${currentSlide === dotIndex ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide(dotIndex); }}
                      ></span>
                    ))}
                  </div>
                </div>
              )}
              
              {project.link && (
                <a 
                  href={project.link} 
                  className="project-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;