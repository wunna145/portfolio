import React from "react";
import instagram from '../resources/instagram.png';
import linkedin from '../resources/linkedin.png';
import github from '../resources/github.png';
import gmail from '../resources/gmail.png';
import './Links.css';

const Links = () => {
    return (
        <div className="links">
            <a href="https://www.linkedin.com/in/zaw-wunna/" target="_blank"> <img src={linkedin} /> </a>
            <a href="https://www.github.com/wunna145" target="_blank"> <img src={github} /> </a>
            <a href="https://www.instagram.com/zachwag_/" target="_blank"><img src={instagram} /></a>
            <a href="mailto:zawwunna145@gmail.com"><img src={gmail} /></a>
        </div>
    );
};

export default Links;