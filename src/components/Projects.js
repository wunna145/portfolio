import React from 'react';
import './Projects.css';
import musicsphere from '../assets/musicsphere.jpg';
import metacity from '../assets/metacity.jpg';
import zacwarbler from '../assets/zacwarbler.jpg';

const Projects = () => {
  const images = {
    "musicsphere": musicsphere,
    "metacity": metacity,
    "zacwarbler": zacwarbler
  }

  const projects = [
    {
      image: 'musicsphere',
      title: 'Music Sphere',
      tech: 'JavaScript · Node.js · Express.js · React.js · PostgreSQL · HTML & CSS',
      description: 'Implemented features allowing users to explore music without creating an account, '+
      'and enabling account creation for playlist creation and management. Skills honed in '+
      'full-stack web development, RESTful API implementation, and database management.',
      link: 'musicsphere.wiki'
    },
    {
      image: 'metacity',
      title: 'Meta City',
      tech: 'HTML & CSS · Python · Javascript · Flask · PostgreSQL · SQLAlchemy · Bcrypt · WTForms · Jinja',
      description: 'A responsive web application provides a comprehensive resource for superhero '+
      'enthusiasts. Educated users about various superheroes and their backgrounds.',
      link: 'metacity.onrender.com',
    },
    {
      image: 'zacwarbler',
      title: 'Warbler',
      tech: 'Python · Flask · PostgreSQL · SQLAlchemy · Bcrypt · WTForms · Jinja',
      description: 'ZacWarbler is a multifunctional platform designed for seamless interaction '+
      'and content management. Users can post, react, comment, and save posts from their own '+
      'feed or others.',
      link: 'zacwarbler.onrender.com',
    }

  ];

  return (
    <section id="projects" className='pj-sec'>
      {projects.map((project, index) => (
        <a key={index} href={`https://${project.link}`}  target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="pjmain">
            <div className='image'>
              <img src={images[project.image]} className='project-image'/>
            </div>
            <div className='project'>
              <p className='title'>{project.title}</p>
              <p className='description'>{project.description}</p> 
              <p className='tech'>{project.tech}</p>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Projects;
