import React from 'react'
import './Navbar.scss'
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <h2><span>W</span> folio</h2>
      </div>
      <div className='app__navbar-social'>
        <FiLinkedin />
        <FiGithub />
        <button href='' target='blank'>Download CV</button>
      </div>
    </div>
  )
}

export default Navbar