import { useContext, useState } from 'react';
import './Projects.css';
import musicsphere from '../assets/musicsphere.jpg';
import metacity from '../assets/metacity.jpg';
import zacwarbler from '../assets/zacwarbler.jpg';
import resume from '../assets/resume.pdf';
import jeopardy from '../assets/Jeopardy.jpeg';
import giphyparty from '../assets/GiphyParty.png';
import { ButtonContext } from '../ButtonContext';

const Projects = () => {
  const { clickedButton, setClickedButton } = useContext(ButtonContext);
  const [showMessage, setShowMessage] = useState({});

  const handleCardClick = (index) => {
    setShowMessage((prev) => ({ ...prev, [index]: true }));
  };

  const handleLinkClick = (index) => {
    setShowMessage((prev) => ({ ...prev, [index]: false }));
  };
  
  const images = {
    "musicsphere": musicsphere,
    "metacity": metacity,
    "zacwarbler": zacwarbler,
    "jeopardy": jeopardy,
    "giphyparty": giphyparty
  }

  const projects = [
    {
      image: 'musicsphere',
      title: 'Music Sphere',
      tech: 'JavaScript · Node.js · Express.js · React.js · PostgreSQL · HTML & CSS',
      description: 'Implemented features allowing users to explore music without creating an account, '+
      'and enabling account creation for playlist creation and management. Skills honed in '+
      'full-stack web development, RESTful API implementation, and database management.',
      link: 'musicsphere.wiki',
      repo: 'github.com/wunna145/capstone-2'
    },
    {
      image: 'metacity',
      title: 'Meta City',
      tech: 'HTML & CSS · Python · Javascript · Flask · PostgreSQL · SQLAlchemy · Bcrypt · WTForms · Jinja',
      description: 'A responsive web application provides a comprehensive resource for superhero '+
      'enthusiasts. Educated users about various superheroes and their backgrounds.',
      link: 'metacity.onrender.com',
      repo: 'github.com/wunna145/Capstone-1'
    },
    {
      image: 'zacwarbler',
      title: 'Warbler',
      tech: 'Python · Flask · PostgreSQL · SQLAlchemy · Bcrypt · WTForms · Jinja',
      description: 'ZacWarbler is a multifunctional platform designed for seamless interaction '+
      'and content management. Users can post, react, comment, and save posts from their own '+
      'feed or others.',
      link: 'zacwarbler.onrender.com',
      repo: 'github.com/wunna145/Warbler'
    },
    {
      image: 'jeopardy',
      title: 'Jeopardy',
      tech: 'Javascript · Axios · HTML · CSS · jService API',
      description: 'A dynamic Jeopardy-style trivia game that fetches random categories and questions '+
      'from the JService API using Axios, allowing players to reveal questions and answers interactively '+
      'on a generated game board.',
      link: '',
      repo: 'github.com/wunna145/Jeopardy'
    },
    {
      image: 'giphyparty',
      title: 'Giphy Party',
      tech: 'Javascript · jQuery · Axios · HTML · CSS · Giphy API',
      description: 'This is a simple web application that lets users search for GIFs using the Giphy API. '+ 
      'Users can type a search term, and the app displays a random GIF from the search results. It also includes '+ 
      'a button to remove all displayed GIFs. The app dynamically updates the page without reloading, creating a smooth user experience.',
      link: 'ajaxgiphyparty.onrender.com',
      repo: 'github.com/wunna145/Jeopardy'
    }
 ];

  const pjsClick = () => {
    setClickedButton('projects');
  }

  return (
    <section id="projects" className='pj-sec'>
      {(clickedButton === "home" ? projects.slice(0,3) : projects).map((project, index) => (
        <div key={index} className="pjmain"
        onClick={(e) => {
          if(e.target.tagName !== "A"){
            if(project.link){
              handleCardClick(index);
            }else{
              window.open(`https://${project.repo}`, "_blank");
            }
          }
        }}>
          <div className='image'>
            <img src={images[project.image]} alt='pj-img' className='project-image'/>
          </div>
          <div className='project'>
            <p className='title'> {project.title}</p>
            {project.link && (
              <a className='link' href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick(index)}> App </a>
            )}
            <a className='link' href={`https://${project.repo}`} target="_blank" rel="noopener noreferrer" onClick={() => handleLinkClick(index)}> Github </a>
            {showMessage[index] && (
              <span className="select-msg" style={{ color: "red", marginLeft: "10px", fontSize: "0.9rem" }}>
                Please select App or Github
              </span>
            )}
            <p className='pj-description'>{project.description}</p> 
            <p className='tech'>{project.tech}</p>
          </div>
        </div>
      ))}
      {clickedButton === 'home' && (
        <div className="resume-link">
          <a onClick={pjsClick}>
            View More Projects
          </a><br /><br />
          <a href={resume} target="_blank" rel="noopener noreferrer">
            View My Resume
          </a>
        </div>
      )}
    </section>
  );
};

export default Projects;
