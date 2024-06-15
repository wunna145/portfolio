import React, { useState, useEffect, useRef } from 'react';
import './LeftSide.css';
import Navigation from './Navigation';
import Profile from './Profile';
import Links from './Links';

const LeftSide = () => {
  const [isMobile, setIsMobile] = useState(false);
  const leftSideRef = useRef(null);

  const handleScroll = (e) => {
    const deltaY = e.deltaY;
    if (deltaY !== 0) {
      const rightSide = document.querySelector('.right-side');
      rightSide.scrollTop += deltaY;
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);  

  return (
    <div className="left-side" onWheel={!isMobile ? handleScroll : null} ref={leftSideRef}>
        <Profile />
        <Navigation />
        <Links />
    </div>
  );
};

export default LeftSide;
