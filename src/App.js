import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="App">
      <div className="container">
        <LeftSide />
        <RightSide />
      </div>
      <Cursor />
    </div>
  );
}

export default App;
