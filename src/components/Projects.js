import { useContext, useState } from 'react';
import './Projects.css';
import musicsphere from '../assets/musicsphere.jpg';
import metacity from '../assets/metacity.jpg';
import zacwarbler from '../assets/zacwarbler.jpg';
import resume from '../assets/resume.pdf';
import jeopardy from '../assets/Jeopardy.jpeg';
import giphyparty from '../assets/GiphyParty.png';
import meme from '../assets/meme.png';
import portfolio from '../assets/portfolio.png';
import pokemoncards from '../assets/pokemoncards.png'
import { ButtonContext } from '../ButtonContext';

const Projects = () => {
  const { clickedButton, setClickedButton } = useContext(ButtonContext);
  const [showMessage, setShowMessage] = useState({});

  const handleCardClick = (index) => {
    setShowMessage((prev) => ({ ...prev, [index]: true }));

    setTimeout(() => {
      setShowMessage((prev) => ({ ...prev, [index]: false}));
    }, 5000);
  };

  const handleLinkClick = (index) => {
    setShowMessage((prev) => ({ ...prev, [index]: false }));
  };
  
  const images = {
    "musicsphere": musicsphere,
    "metacity": metacity,
    "zacwarbler": zacwarbler,
    "jeopardy": jeopardy,
    "giphyparty": giphyparty,
    "meme": meme,
    "portfolio": portfolio,
    "pokemoncards": pokemoncards
  }

  const projects = [
    {
      image: 'portfolio',
      title: 'Portfolio',
      tech: 'JavaScript · Node.js · React.js · CSS' ,
      description: 'A personal portfolio website built with React to showcase my projects, technical skills, '+ 
      'experiences and resume. It features smooth navigation between pages, interactive project cards with live links, and '+ 
      'a modern, responsive layout designed for a clean user experience.',
      link: '',
      repo: 'github.com/wunna145/portfolio'
    },
    {
      image: 'musicsphere',
      title: 'Music Sphere',
      tech: 'JavaScript · Node.js · Express.js · React.js · PostgreSQL · CSS' ,
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
      tech: 'Javascript · Axios · HTML · CSS',
      description: 'A dynamic Jeopardy-style trivia game that fetches random categories and questions '+
      'from the JService API using Axios, allowing players to reveal questions and answers interactively '+
      'on a generated game board.',
      link: '',
      repo: 'github.com/wunna145/Jeopardy'
    },
    {
      image: 'pokemoncards',
      title: 'Cards & Pokemon',
      tech: 'Javascript · React.js · Axios · Jest · UUID · CSS',
      description: 'Dual-interface application designed to manage two different collections: a standard playing '+ 
      'card table and a roster of Pokémon characters. The first section provides tools to display and manipulate a '+ 
      'virtual card deck, featuring options to add or clear playing cards. The second section functions as a team builder '+ 
      'or Pokédex viewer where users can select, view detailed stats, and manage their favorite Pokémon with "catch" and "delete" functions.',
      link: 'react-cards-pokemon.onrender.com',
      repo: 'github.com/wunna145/react-cards-pokemon'
    },
    {
      image: 'giphyparty',
      title: 'Giphy Party',
      tech: 'Javascript · jQuery · Axios · HTML · CSS',
      description: 'This is a simple web application that lets users search for GIFs using the Giphy API. '+ 
      'Users can type a search term, and the app displays a random GIF from the search results. It also includes '+ 
      'a button to remove all displayed GIFs. The app dynamically updates the page without reloading, creating a smooth user experience.',
      link: 'ajaxgiphyparty.onrender.com',
      repo: 'github.com/wunna145/Jeopardy'
    },
    {
      image: 'meme',
      title: 'Meme Generator',
      tech: 'Javascript · HTML · CSS',
      description: 'This is a simple JavaScript meme generator app that lets users create and delete custom memes dynamically. '+ 
      'Users enter an image URL and two text captions (top and bottom). When submitted, the app overlays the texts on the image '+ 
      'to form a meme. Clicking on a meme removes it from the page.',
      link: 'meme-generator-u15k.onrender.com/',
      repo: 'github.com/wunna145/meme-generator'
    }
 ];

  const pjsClick = () => {
    setClickedButton('projects');
  }

  return (
    <section id="projects" className='pj-sec'>
      {(clickedButton === "home" ? projects.slice(1,4) : projects).map((project, index) => (
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
              <span className="select-msg fade-out">
                Please select App or Github
              </span>
            )}
            <p className='pj-description'>{project.description}</p> 
            <p className='tech'>{project.tech}</p>
          </div>
        </div>
      ))}
      {clickedButton === 'projects' &&(
        <div className='resume-link'>
          <a href='https://www.github.com/wunna145' target='_blank' rel="noopener noreferrer" > View more projects on Github </a>
        </div>
      )}
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
