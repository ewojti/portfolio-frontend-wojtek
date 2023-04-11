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
        <h3 className="slide-in-fwd-center">🖐 Hello, my name is</h3>
        <h1 className="slide-in-fwd-center-sec">Wojtek.</h1>
        <h1 className="slide-in-fwd-center-third">
          I AM ASPIRE AS A REACT FRONTEND DEVELOPER FOR MY FIRST JOB
        </h1>
        <p
          className="app__header-description slide-in-bottom"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="2600"
        >
          I CREATE WEBSITES THAT ARE A PLEASURE TO USE. I DESIGN THEM WITH
          BEAUTIFUL TYPOGRAPHY, MEANINGFUL TRANSITIONS AND THOUGHTFUL
          INTERACTIONS THAT DELIGHT PEOPLE.
        </p>
        <button
          className="app__header-text-button slide-in-bottom-sec"
          // data-aos="fade-up"
          // data-aos-delay="2800"
        >
          <p>Get in touch</p>
        </button>
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