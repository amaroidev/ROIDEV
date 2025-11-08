import React, { useMemo, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const contactMethods = useMemo(() => ([
    {
      label: 'Email',
      value: 'richardkwakuopoku06@gmail.com',
      href: 'mailto:richardkwakuopoku06@gmail.com',
      iconClass: 'fas fa-envelope',
      newTab: false,
    },

    {
      label: 'LinkedIn',
      value: 'richardkwakuopoku982',
      href: 'https://linkedin.com/in/richardkwakuopoku982',
      iconClass: 'fab fa-linkedin',
      newTab: true,
    },

    {
      label: 'GitHub',
      value: 'amaroidev',
      href: 'https://github.com/amaroidev',
      iconClass: 'fab fa-github',
      newTab: true,
    },

    {
      label: 'WhatsApp',
      value: '+233 50 859 7910',
      href: 'https://wa.me/233508597910',
      iconClass: 'fab fa-whatsapp',
      newTab: true,
    },

    {
      label: 'Phone',
      value: '+233 55 150 0736',
      href: 'tel:+233551500736',
      iconClass: 'fas fa-phone',
      newTab: false,
    },

    {
      label: 'Instagram',
      value: 'richie_roi',
      href: 'https://www.instagram.com/richie_roi',
      iconClass: 'fab fa-instagram',
      newTab: true,
    }
  ]), []);

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
    const mailtoLink = `mailto:richardkwakuopoku06@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

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
              {contactMethods.map(({ label, value, href, iconClass, newTab }) => (
                <a
                  key={label}
                  className="contact-card"
                  href={href}
                  target={newTab ? '_blank' : undefined}
                  rel={newTab ? 'noopener noreferrer' : undefined}
                  aria-label={`${label}: ${value}`}
                >
                  <i className={`${iconClass} contact-icon`} aria-hidden="true"></i>
                  <h3>{label}</h3>
                  <span className="contact-value">{value}</span>
                </a>
              ))}
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