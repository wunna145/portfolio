import React from 'react';
import './RightSide.css';
import Projects from './Projects';
import About from './About';
import Experiences from './Experiences';
import Footer from './Footer';

const RightSide = () => {
  return (
    <div className="right-side">
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
};

export default RightSide;
