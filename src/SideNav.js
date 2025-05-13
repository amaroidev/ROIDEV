import React from 'react';
import './SideNav.css';

const SideNav = ({ closeSideNav }) => (
  <nav className="sidenav">
    <button className="close-sidenav" onClick={closeSideNav}>
      <i className="fas fa-times"></i>
    </button>
    <div className="sidenav-content">
      <div className="sidenav-header">
        <img src={process.env.PUBLIC_URL + '/images/ROIDEV.png'} alt="RoiDev Logo" className="sidenav-logo" />
        <span>RoiDev</span>
      </div>
      <ul>
        <li><a href="#hero" onClick={closeSideNav}>Home</a></li>
        <li><a href="#about" onClick={closeSideNav}>About</a></li>
        <li><a href="#skills" onClick={closeSideNav}>Skills</a></li>
        <li><a href="#projects" onClick={closeSideNav}>Projects</a></li>
        <li><a href="#contact" onClick={closeSideNav}>Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default SideNav;
