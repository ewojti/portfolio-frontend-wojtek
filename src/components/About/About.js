import React from 'react'
import './About.scss'
import images from '../../constants/images';

const About = () => {
  return (
    <div className="app__about section__padding">
      <div className="app__about-text">
        <h1 className="app__about-title">
          LET ME <span>INTRODUCE</span> MYSELF
        </h1>
        <p>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️ I am fluent in classics like Javascript. My field of
          Interest's are building new Web Technologies and Products and also in
          areas related to Deep Learning and Natural Launguage Processing.
          Whenever possible, I also apply my passion for developing products
          with Modern Javascript Library and Frameworks like React.js and
          Next.js
        </p>
      </div>
      <div className="app__about-picture">
        <img src={images.taxideveloper} alt="" />
      </div>
    </div>
  );
}

export default About