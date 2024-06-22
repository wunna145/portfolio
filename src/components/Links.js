import React from "react";
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import gmail from '../assets/mail.svg';
import './Links.css';

const Links = () => {
    return (
        <div className="links">
            <a href="https://www.linkedin.com/in/zaw-wunna/" target="_blank" rel="noreferrer"> <img src={linkedin} /> </a>
            <a href="https://www.github.com/wunna145" target="_blank" rel="noreferrer"> <img src={github} /> </a>
            <a href="https://www.instagram.com/zachwag_/" target="_blank" rel="noreferrer"><img src={instagram} /></a>
            <a href="mailto:zawwunna145@gmail.com"><img src={gmail} alt='mail' /></a>
        </div>
    );
};

export default Links;