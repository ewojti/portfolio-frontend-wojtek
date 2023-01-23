import React from 'react';
import './Contact.scss'
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";


const Contact = () => {
  return (
    <div className='app__connect'>
        <h1>Connect with me</h1>
        <div className='app__connect-socials'>
            <FiGithub />
            <FiLinkedin />
            <FiTwitter />
        </div>
    </div>
  )
}

export default Contact