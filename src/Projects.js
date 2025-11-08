import React, { useState } from 'react';
import './Projects.css';
import './Slideshow.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Universal Video Downloader',
      description:
        'A powerful, modern web application for downloading videos from YouTube, Instagram, Twitter, TikTok, and 1000+ other platforms.',
      link: 'https://all-sites-downloader.onrender.com/',
      linkLabel: 'Live Demo',
      tech: ['React', 'Node.js', 'Express', 'FFmpeg', 'JavaScript'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/universalvideodownloader1.png', alt: 'Universal Video Downloader Main Interface' },
        { src: process.env.PUBLIC_URL + '/images/universalvideodownloader2.png', alt: 'Download History' },
        { src: process.env.PUBLIC_URL + '/images/universalvideodownloader3.png', alt: 'Batch Download & Media Tools' }
      ]
    },
    {
      title: 'Inventory System Management',
      description:
        'A backend repository for a chemical factory, featuring employee management, inventory tracking, and RESTful API endpoints.',
      link: 'https://github.com/FCM4100819823/Inventory_System_Management',
      tech: ['Node.js', 'Express', 'SQL Server', 'REST APIs', 'JWT'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/inventory1.png', alt: 'Inventory Dashboard' },
        { src: process.env.PUBLIC_URL + '/images/inventory2.png', alt: 'Employee Management' },
        { src: process.env.PUBLIC_URL + '/images/inventory3.png', alt: 'Inventory Tracking' }
      ]
    },
    {
      title: 'School Management System',
      description: 'A School Management CRUD Application built with Flask and Microsoft SQL Server.',
      link: 'https://github.com/FCM4100819823/SDMSFLASK',
      tech: ['Python', 'Flask', 'MS SQL Server', 'HTML/CSS'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/sdms1.png', alt: 'Dashboard' },
        { src: process.env.PUBLIC_URL + '/images/sdms2.png', alt: 'Student Records' },
        { src: process.env.PUBLIC_URL + '/images/sdms3.png', alt: 'Add Student Form' }
      ]
    },
    {
      title: '3D Virtual Environment',
      description:
        'An interactive 3D virtual environment created with A-Frame, featuring furniture, animations, and a 360-degree background.',
      link: 'https://github.com/FCM4100819823/A-Frame',
      tech: ['A-Frame', 'WebVR', 'JavaScript'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/aframe1.jpg', alt: '3D Scene Overview' },
        { src: process.env.PUBLIC_URL + '/images/aframe2.png', alt: 'Furniture Models' },
        { src: process.env.PUBLIC_URL + '/images/aframe3.png', alt: 'Animated Elements' }
      ]
    },
    {
      title: 'Canva Design Portfolio',
      description:
        'A collection of professional graphic design projects created using Canva, showcasing creativity and design expertise.',
      link:
        'https://www.canva.com/design/DAGm8mxrr6o/_LxihyDZW0iFPFNJL-_oeA/edit?utm_content=DAGm8mxrr6o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      tech: ['Canva', 'Graphic Design'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/canva1.png', alt: 'Social Media Post Design' },
        { src: process.env.PUBLIC_URL + '/images/canva2.png', alt: 'Business Card Design' },
        { src: process.env.PUBLIC_URL + '/images/canva3.png', alt: 'Presentation Slide Design' }
      ]
    },
    {
      title: 'StudyMate — AI-Powered Study Assistant',
      description:
        'StudyMate is a learning platform with AI-powered study tools and a beautiful, modern UI. Live demo available.',
      link: 'https://studymatepro.vercel.app',
      linkLabel: 'Live Demo',
      tech: ['React', 'AI APIs', 'Vercel', 'CSS'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/studymate1.png', alt: 'StudyMate — Landing / Dashboard' },
        { src: process.env.PUBLIC_URL + '/images/studymate2.png', alt: 'StudyMate — Study Tools' },
        { src: process.env.PUBLIC_URL + '/images/studymate3.png', alt: 'StudyMate — Notes & AI Assistant' }
      ]
    },
    {
      title: 'HomeChoice Mini Mart — E-commerce Platform',
      description:
        'A modern e-commerce platform for neighborhood grocery delivery in Ghana. Features WhatsApp integration, real-time order tracking, flexible delivery windows, and multiple payment options including mobile money and cash on delivery.',
      link: 'https://homechoice-gh.vercel.app',
      linkLabel: 'Live Demo',
      tech: ['React', 'Next.js', 'Vercel', 'WhatsApp API', 'CSS'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/homechoiceminimart1.png', alt: 'HomeChoice Main Landing Page' },
        { src: process.env.PUBLIC_URL + '/images/homechoiceminimart2.png', alt: 'Checkout & Delivery Options' },
        { src: process.env.PUBLIC_URL + '/images/homechoiceminimart3.png', alt: 'Features & Contact Information' }
      ]
    },
    {
      title: 'Breast Cancer Companion App (Mobile — React Native & Expo)',
      description:
        "Mobile companion app for Android and iOS built with React Native and the Expo SDK. Provides clear symptom information, screening guidelines, preventive measures, and curated support resources. Focused on awareness and education (not for diagnosis).",
      // repository is private — indicate that on the card
      repoPrivate: true,
      tech: ['React Native', 'Expo SDK', 'JavaScript'],
      slides: [
        { src: process.env.PUBLIC_URL + '/images/breastcancerapp1.jpg', alt: 'App Interface' },
        { src: process.env.PUBLIC_URL + '/images/breastcancerapp2.jpg', alt: 'App Screens' },
        { src: process.env.PUBLIC_URL + '/images/breastcancerapp3.jpg', alt: 'Resources & Links' }
      ]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  // modal state for requesting access to private repos
  const [requestModal, setRequestModal] = useState({ open: false, project: null });

  const nextSlide = () => {
    const slides = projects[activeProject].slides || [];
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    const slides = projects[activeProject].slides || [];
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleProjectClick = (index) => {
    setActiveProject(index);
    setCurrentSlide(0); // Reset to first slide when changing projects
  };

  const openRequestAccess = (project) => {
    setRequestModal({ open: true, project });
  };

  const closeRequestModal = () => setRequestModal({ open: false, project: null });

  // Tilt effect on cards
  React.useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateY = ((x - midX) / midX) * 6; // -6 to 6 deg
      const rotateX = -((y - midY) / midY) * 6;
      card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
    };
    const reset = (e) => {
      e.currentTarget.style.transform = '';
    };
    cards.forEach((c) => {
      c.addEventListener('mousemove', handleMove);
      c.addEventListener('mouseleave', reset);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener('mousemove', handleMove);
        c.removeEventListener('mouseleave', reset);
      });
    };
  }, []);

  // Precompute label and icon for links to keep JSX simple
  const renderLinkFor = (project) => {
    if (!project.link) return null;
    const isLive = project.linkLabel === 'Live Demo' || (!project.link.includes('github.com') && project.link.startsWith('http'));
    let label = 'Open';
    if (project.linkLabel) label = project.linkLabel;
    else if (project.link.includes('github.com')) label = 'View on GitHub';
    const Icon = isLive ? FaExternalLinkAlt : FaGithub;
    return (
      <a
        href={project.link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        <Icon /> {label}
      </a>
    );
  };

  // close modal on Escape
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && requestModal.open) closeRequestModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [requestModal.open]);

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
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.tech && project.tech.length > 0 && (
                <div className="tech-list">
                  {project.tech.map((t, i) => (
                    <span key={`${t}-${i}`} className="tech-badge">{t}</span>
                  ))}
                </div>
              )}

              {project.slides && project.slides.length > 0 && (
                <div className="slideshow">
                  <button
                    className="slide-btn prev-btn"
                    aria-label="Previous slide"
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>

                  <img
                    src={project.slides[currentSlide].src}
                    alt={project.slides[currentSlide].alt}
                    className="slide-image"
                  />

                  <button
                    className="slide-btn next-btn"
                    aria-label="Next slide"
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  >
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

              <div className="project-actions">
                {project.repoPrivate ? (
                  // show a request access CTA for private repos
                  <button
                    className="request-access-btn"
                    onClick={(e) => { e.stopPropagation(); openRequestAccess(project); }}
                  >
                    Request access
                  </button>
                ) : (
                  renderLinkFor(project)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request access modal */}
      {requestModal.open && (
        <>
          <button className="modal-overlay" onClick={closeRequestModal} aria-label="Close overlay"></button>
          <dialog className="request-modal" open>
            <button className="modal-close" onClick={closeRequestModal} aria-label="Close">×</button>
            <h3>Request access</h3>
            <p>
              The repository for <strong>{requestModal.project.title}</strong> is private.
              You can request access by sending an email to me.
            </p>
            <p>
              <strong>Contact:</strong> <code>ce-rkopoku9823@st.umat.edu.gh</code>
            </p>
            <p>
              <a
                className="mailto-btn"
                href={
                  `mailto:ce-rkopoku9823@st.umat.edu.gh?subject=${encodeURIComponent('Access request: ' + requestModal.project.title)}&body=${encodeURIComponent('Hi,\n\nI would like to request access to the private repository for "' + requestModal.project.title + '".\n\nReason for access:\n\nThanks,')}`
                }
                onClick={closeRequestModal}
              >
                Send request email
              </a>
            </p>
            <p className="modal-note">Or copy the contact email and send a message from your email client.</p>
          </dialog>
        </>
      )}
    </section>
  );
};

export default Projects;