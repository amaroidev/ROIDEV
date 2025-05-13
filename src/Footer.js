import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Richard Kwaku Opoku. All rights reserved.</p>
    <p>
      Built with <span role="img" aria-label="love">❤️</span> using React.
    </p>
  </footer>
);

export default Footer;
