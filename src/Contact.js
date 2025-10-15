import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-text">
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out through any of these channels:</p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-card">
              <i className="fas fa-envelope contact-icon"></i>
              <h3>Email</h3>
              <a href="mailto:ce-rkopoku9823@st.umat.edu.gh">ce-rkopoku9823@st.umat.edu.gh</a>
            </div>
            
            <div className="contact-card">
              <i className="fab fa-linkedin contact-icon"></i>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/richardkwakuopoku982" target="_blank" rel="noopener noreferrer">richardkwakuopoku982</a>
            </div>
            
            <div className="contact-card">
              <i className="fab fa-github contact-icon"></i>
              <h3>GitHub</h3>
              <a href="https://github.com/amaroidev" target="_blank" rel="noopener noreferrer">amaroidev</a>
            </div>
            
            <div className="contact-card">
              <i className="fab fa-whatsapp contact-icon"></i>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/233508597910" target="_blank" rel="noopener noreferrer">+233 50 859 7910</a>
            </div>
            
            <div className="contact-card">
              <i className="fas fa-phone contact-icon"></i>
              <h3>Phone</h3>
              <a href="tel:+233551500736">+233 55 150 0736</a>
            </div>
            
            <div className="contact-card">
              <i className="fab fa-instagram contact-icon"></i>
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/richie_roi" target="_blank" rel="noopener noreferrer">richie_roi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;