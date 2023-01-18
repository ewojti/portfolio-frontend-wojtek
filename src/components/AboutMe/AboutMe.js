import React from 'react';
import images from '../../constants/images'
import './AboutMe.scss'


const AboutMe = () => {
  return (
    <div className="app__aboutMe section__padding">
      <div className="app__aboutMe-text">
        <h3> 🖐 Hi my name is </h3>
        <h1>Wojtek</h1>
        <h1>
          I ASPIRE AS A REACT FRONTEND DEVELOPER AS MY FIRST JOB EXPERIENCE
        </h1>
        <p className="app__aboutMe-description">
          I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
          BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
          INTERACTIONS THAT DELIGHT PEOPLE.
        </p>
        <button className="btn app__aboutMe-text-button">Get in touch</button>
      </div>
      <div className="app__aboutMe-photo">
        <img src={images.portfolio} alt="portfolio" />
      </div>
    </div>
  );
}

export default AboutMe