import React, { useEffect, useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const rightSide = document.querySelector('.right-side'); 
      const scrollPosition = rightSide.scrollTop;
  
      if (scrollPosition >= 0 && scrollPosition < 350) {
        setActiveLink('about');
      } else if (scrollPosition >= 350 && scrollPosition < 1800) {
        setActiveLink('experiences');
      } else if (scrollPosition >= 1800) {
        setActiveLink('projects');
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
        className={`nav ${activeLink === 'experiences' ? 'active' : ''}`}
        href="#experiences"
        onClick={handleNavClick}
      >
          Experiences
      </a>
      <br/>
      <a
        className={`nav ${activeLink === 'projects' ? 'active' : ''}`}
        href="#projects"
        onClick={handleNavClick}
      >
          Projects
      </a>
    </div>
  );
};

export default Navigation;
