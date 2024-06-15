import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="App">
      <LeftSide />
      <RightSide />
      <Cursor />
    </div>
  );
}

export default App;
