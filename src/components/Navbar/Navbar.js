import React from 'react'
import './Navbar.scss'
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <h2>
          <span>W</span> folio
        </h2>
      </div>
      <div className="app__navbar-social">
        <a href="https://www.linkedin.com/in/wojciech-ejsmont-95957618a/">
          <FiLinkedin />
        </a>
        <a href="https://github.com/ewojti">
          <FiGithub />
        </a>
        <a href="" target="blank">
          Resume
        </a>
      </div>
    </div>
  );}

export default Navbar