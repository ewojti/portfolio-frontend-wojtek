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
          I think… 🤷‍♂️
        </p>
        <p>
          I am fluent in classics like <span>Javascript.</span> My field of 
          Interest's are building new <span>Web Technologies and Products </span>
           and also in areas related to <span>Deep Learning and Natural Launguage Processing.</span>
        </p>
        <p>
          Whenever possible, I also apply my passion for developing products
          with <span>Modern Javascript Library and Frameworks</span> like 
          <span> React.js and Next.js</span>
        </p>
      </div>
      <div className="app__about-picture">
        <img src={images.taxideveloper} alt="" />
      </div>
    </div>
  );
}

export default About