import React from 'react';
import './About.css';

const About = () => {
  const about1 = "With a robust background in computer science and extensive experience in programming languages, algorithms, and data structures, I excel in tackling complex software challenges."
  const about2 = "I have honed advanced full-stack development skills through a rigorous Software Engineering career track, refining my problem-solving abilities to create innovative software solutions."
  const about3 = "I am deeply passionate about coding and continually seek to expand my knowledge in problem-solving.";

  return (
    <section id="about" className="aboutme">
        <div>
          <p>{about1}</p>
          <p>{about2}</p>
          <p>{about3}</p>
        </div>
    </section>
  );
};

export default About;
