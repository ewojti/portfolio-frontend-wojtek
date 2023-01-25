import React, {useEffect} from 'react';
import images from '../../constants/images'
import './Header.scss';
import "aos/dist/aos.css";
import Aos from "aos";

const Header = () => {
    useEffect(() => {
      Aos.init({});
    }, []);
  return (
    <div className="app__header section__padding">
      <div className="app__header-text">
        <h3
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="600"
          data-aos-offset="0"
        >
          🖐 Hello, my name is
        </h3>
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1100"
          data-aos-offset="0"
        >
          Wojtek.
        </h1>
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="1800"
          data-aos-offset="0"
        >
          I AM ASPIRE AS A REACT FRONTEND DEVELOPER FOR MY FIRST JOB
        </h1>
        <p
          className="app__header-description"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="2600"
        >
          I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
          BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
          INTERACTIONS THAT DELIGHT PEOPLE.
        </p>
        <div
          className="app__header-text-button"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="2800"
        >
          <button>Get in touch</button>
        </div>
      </div>
      <div
        className="app__header-photo"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500"
      >
        <img src={images.portfolio} alt="portfolio" />
      </div>
    </div>
  );
}

export default Header