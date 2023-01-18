import React from 'react'
import './Navbar.scss'
import { FiFacebook, FiInstagram } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <h2><span>W</span> folio</h2>
      </div>
      <div className='app__navbar-social'>
        <FiFacebook />
        <FiInstagram />
        <a href='' target='blank'>Download CV</a>
      </div>
    </div>
  )
}

export default Navbar