import './LeftSide.css';
import Navigation from './Navigation';
import Profile from './Profile';
import Links from './Links';
import Header from './Header';

const LeftSide = () => {
  return (
    <div className="left-side" >
        <Header />
        <Profile />
        <Navigation />
        <Links />
    </div>
  );
};

export default LeftSide;
