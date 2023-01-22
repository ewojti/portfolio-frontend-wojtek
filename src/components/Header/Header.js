import React from 'react';
import images from '../../constants/images'
import './Header.scss';

const Header = () => {
  return (
    <div className="app__header section__padding">
      <div className="app__header-text">
        <h3> 🖐 Hello, my name is </h3>
        <h1>Wojtek.</h1>
        <h1>I AM ASPIRE AS A REACT FRONTEND DEVELOPER FOR MY FIRST JOB</h1>
        <p className="app__header-description">
          I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
          BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
          INTERACTIONS THAT DELIGHT PEOPLE.
        </p>
        <div className="app__header-text-button">
        <button>Get in touch</button>
        </div>
      </div>
      <div className="app__header-photo">
        <img src={images.portfolio} alt="portfolio" />
      </div>
      {/* <a href=''>Go to projects</a> */}
    </div>
  );
}

export default Header