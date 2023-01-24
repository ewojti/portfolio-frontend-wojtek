import React from 'react';
import './Contact.scss'
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";


const Contact = () => {
  return (
    <div className="app__connect">
      <h1>Find me on</h1>
      <h3>
        Feel free to <span>connect</span> with me
      </h3>
      <div className="app__connect-socials">
        <FiGithub />
        <FiLinkedin />
        <FiTwitter />
      </div>
    </div>
  );
}

export default Contact