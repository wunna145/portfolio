import React, { useEffect, useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const rightSide = document.querySelector('.right-side'); 
      const scrollPosition = rightSide.scrollTop;
  
      if (scrollPosition >= 0 && scrollPosition < 200) {
        setActiveLink('about');
      } else if (scrollPosition >= 200 && scrollPosition < 1000) {
        setActiveLink('projects');
      } else if (scrollPosition >= 1000) {
        setActiveLink('experiences');
      }
    };
  
    window.addEventListener('wheel', handleScroll);
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  

  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(targetId);
    }
  };

  return (
    <div className="nav-sec">
      <a
        className={`nav ${activeLink === 'about' ? 'active' : ''}`}
        href="#about"
        onClick={handleNavClick}
      >
        About
      </a>
      <br/>
      <a
        className={`nav ${activeLink === 'projects' ? 'active' : ''}`}
        href="#projects"
        onClick={handleNavClick}
      >
          Projects
      </a>
      <br/>
      <a
        className={`nav ${activeLink === 'experiences' ? 'active' : ''}`}
        href="#experiences"
        onClick={handleNavClick}
      >
          Experiences
      </a>
    </div>
  );
};

export default Navigation;
