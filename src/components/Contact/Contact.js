import React from "react";
import "./Contact.scss";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="app__connect section__padding">
      <h2>Find me on</h2>
      <h3>
        Feel free to <span>connect</span> with me
      </h3>
      <div className="app__connect-socials">
        <a href="https://github.com/ewojti" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/wojciech-ejsmont-95957618a/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
