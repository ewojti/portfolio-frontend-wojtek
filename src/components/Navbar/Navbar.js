import React from "react";
import "./Navbar.scss";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>
          <span>W</span> folio
        </h2>
      </div>
      <div className="app__navbar-social">
        <a
          href="https://www.linkedin.com/in/wojciech-ejsmont-95957618a/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a href="https://github.com/ewojti" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a
          href="https://drive.google.com/file/d/1_-YMxjB_6RNSEeP4QUEILkig3kvT0fB6/view?usp=sharing"
          target="blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
