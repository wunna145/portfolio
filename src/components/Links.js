import React from "react";
import resumeLogo from '../assets/resume.svg';
import resume from '../assets/resume.pdf';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import gmail from '../assets/mail.svg';
import './Links.css';

const Links = () => {
    return (
        <div className="links">
            <a href="https://www.linkedin.com/in/zaw-wunna/" target="_blank" title="LinkedIn"> <img src={linkedin} /> </a>
            <a href="https://www.github.com/wunna145" target="_blank" title="GitHub"> <img src={github} /> </a>
            <a href={resume} target="_blank" title="Resume"><img src={resumeLogo} /></a>
            <a href="mailto:zawwunna145@gmail.com" title="Gmail"><img src={gmail} /></a>
        </div>
    );
};

export default Links;