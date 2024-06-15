import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>Developed by <span class="highlight">Zaw Wunna </span> 
      using <span class="highlight">Visual Studio Code</span>, this site is built with 
      <span class="highlight"> React.js</span> and styled with <span class="highlight">CSS</span>. 
      Images are dynamically imported and displayed based on project data. 
      Deployed seamlessly on <span class="highlight">Render</span>.
      </p>
    </footer>
  );
};

export default Footer;
