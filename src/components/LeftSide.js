import React, { useRef } from 'react';
import './LeftSide.css';
import Navigation from './Navigation';
import Profile from './Profile';
import Links from './Links';

const LeftSide = () => {
  const leftSideRef = useRef(null);

  const handleScroll = (e) => {
    // Scroll the right side by the same amount
    const deltaY = e.deltaY;
    if (deltaY !== 0) {
      const rightSide = document.querySelector('.right-side');
      rightSide.scrollTop += deltaY;
    }
  };

  return (
    <div className="left-side" onWheel={handleScroll} ref={leftSideRef}>
        <Profile />
        <Navigation />
        <Links />
    </div>
  );
};

export default LeftSide;
