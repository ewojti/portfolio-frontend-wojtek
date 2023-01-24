import React from 'react'
import './Navbar.scss'
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <h2><span>W</span> folio</h2>
      </div>
      <div className='app__navbar-social'>
        <FiLinkedin />
        <FiGithub />
        <FiTwitter />
        <a href='' target='blank'>Resume</a>
      </div>
    </div>
  )
}

export default Navbar