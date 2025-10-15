import './App.css';
import { useContext } from 'react';
import Cursor from './components/Cursor';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Projects from './components/Projects';
import Header from './components/Header';
import { ButtonContext } from './ButtonContext';

function App() {
  const { clickedButton } = useContext(ButtonContext);

  return (
    <div>
      {clickedButton === 'home' && (
        <div className="app-home">
          <div className="container">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      )}
      {clickedButton === 'projects' && (
        <div className="app-projects">
          <Header />
          <div className="projects-container">
            <Projects />
          </div>
        </div>
      )}
      <Cursor />
    </div>
  );
}

export default App;
