import './Header.css'
import { useContext, useState, useEffect } from 'react';
import { ButtonContext } from '../ButtonContext';

const Header = () => {
  const { clickedButton, setClickedButton } = useContext(ButtonContext);
  const [homeClass, setHomeClass] = useState('');
  const [pjsClass, setPjsClass] = useState('alt');

  useEffect(() => {
    if (clickedButton === 'home') {
      setHomeClass('');
      setPjsClass('alt');
    } else if (clickedButton === 'projects') {
      setPjsClass('');
      setHomeClass('alt');
    }
  }, [clickedButton]);

  const homeClick = () => {
    setHomeClass('');
    setPjsClass('alt');
    setClickedButton('home');
  }

  const pjsClick = () => {
    setPjsClass('');
    setHomeClass('alt');
    setClickedButton('projects');
  }

  return (
    <div className='buttons-container'>
        <a className={homeClass} onClick={homeClick}>Home</a>
        <a className={pjsClass} onClick={pjsClick}>Projects</a>
    </div>
  );
};

export default Header;
