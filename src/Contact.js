import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus('Please fill in your name, email, and message.');
      return;
    }

    const mailSubject = subject.trim() ? subject : `Portfolio inquiry from ${name}`;
    const mailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:ce-rkopoku9823@st.umat.edu.gh?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    if (typeof window !== 'undefined') {
      window.location.href = mailtoLink;
    }

    setFormStatus('Thanks! Your email client should open shortly. If it does not, email me directly at ce-rkopoku9823@st.umat.edu.gh.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <p>I'm always open to internships, project collaborations, and embedded systems work. Reach out through any of these channels or drop a message with the form.</p>
            </div>

            <div className="contact-methods">
              <div className="contact-card">
                <i className="fas fa-envelope contact-icon" aria-hidden="true"></i>
                <h3>Email</h3>
                <a href="mailto:ce-rkopoku9823@st.umat.edu.gh">ce-rkopoku9823@st.umat.edu.gh</a>
              </div>

              <div className="contact-card">
                <i className="fab fa-linkedin contact-icon" aria-hidden="true"></i>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/richardkwakuopoku982" target="_blank" rel="noopener noreferrer">richardkwakuopoku982</a>
              </div>

              <div className="contact-card">
                <i className="fab fa-github contact-icon" aria-hidden="true"></i>
                <h3>GitHub</h3>
                <a href="https://github.com/amaroidev" target="_blank" rel="noopener noreferrer">amaroidev</a>
              </div>

              <div className="contact-card">
                <i className="fab fa-whatsapp contact-icon" aria-hidden="true"></i>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/233508597910" target="_blank" rel="noopener noreferrer">+233 50 859 7910</a>
              </div>

              <div className="contact-card">
                <i className="fas fa-phone contact-icon" aria-hidden="true"></i>
                <h3>Phone</h3>
                <a href="tel:+233551500736">+233 55 150 0736</a>
              </div>

              <div className="contact-card">
                <i className="fab fa-instagram contact-icon" aria-hidden="true"></i>
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/richie_roi" target="_blank" rel="noopener noreferrer">richie_roi</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Project / Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Let me know what you'd like to build"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share some context so I can prepare before we talk"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;