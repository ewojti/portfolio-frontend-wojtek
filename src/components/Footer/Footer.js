import React from 'react';
import { FiGithub, FiLinkedin } from "react-icons/fi";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div>
        <p>Designed and Developed by Wojtek Ejsmont</p>
      </div>
      <div>
        <p>Copyright © WE</p>
      </div>
      <div className="app__socials">
        <FiLinkedin />
        <FiGithub />
      </div>
    </div>
  );
}

export default Footer