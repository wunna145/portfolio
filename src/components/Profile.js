import React from 'react';
import './Profile.css';
import javascript from '../assets/javascript.svg';
import python from '../assets/python.svg';
import flask from '../assets/flask.svg';
import nodejs from '../assets/nodejs.svg';
import reactjs from '../assets/reactjs.svg';
import expressjs from '../assets/expressjs.svg';
import rest from '../assets/rest.svg';
import git from '../assets/git.svg';
import postgresql from '../assets/postgresql.svg';

const Profile = () => {
  return (
    <section id="profile">
      <h2>Zaw Wunna</h2>
      <h5>Software Engineer</h5>
      <p>CS student with hands-on full-stack projects, seeking an SWE role to grow and contribute.</p>
      {/* <div className='skills-container'> 
            <img title="Python" src={python} />
            <img title="Flask" src={flask} />
            <img title="JavaScript" src={javascript} />
            <img title="ReactJS" src={reactjs} />
            <img title="NodeJS" src={nodejs} />
            <img title="ExpressJS" src={expressjs} />
            <img title="REST" src={rest} />
            <img title="PostgreSQL" src={postgresql} />
            <img title="Git" src={git} />
      </div> */}
    </section>
  );
};

export default Profile;
