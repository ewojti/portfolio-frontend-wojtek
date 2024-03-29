import React, {useEffect} from 'react'
import './About.scss'
import "aos/dist/aos.css";
import Aos from "aos";

const About = () => {
    useEffect(() => {
      Aos.init({});
    }, []);
  return (
    <div className="app__about section__padding">
      <div>
        <h1 className="app__about-title" data-aos="fade-right">
          LET ME <span>INTRODUCE</span> MYSELF
        </h1>
      </div>
      <div className="app__about-section">
        <div
          className="app__about-section-card"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <div className="app__about-section-emoji">👨📐✏️📈</div>
          <h2>Mechanical engineer</h2>
          <h4>
            5 yrs experience at big factory || self & team work on the projects
            || solving problems{" "}
          </h4>
          <p>
            Working as Mechanical engineer in big factory gave me a lot of a{" "}
            <span>soft skills</span> like <span>team & self working</span>,{" "}
            <span>communicativeness</span>, <span>open mind</span> to looking at
            problems and solve it. I think this soft skills can be{" "}
            <span>usefull</span> at work as a programmer
          </p>
        </div>
        <div
          className="app__about-section-card"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          <span className="app__about-section-emoji">👨‍💻</span>
          <h2>Programming experience</h2>
          <h4>
            since 2021 || finished "Frontend Developer carrer path" at
            Scrimba.com || working at open source project
          </h4>
          <p>
            I finished a "Frontend Developer carrer path" <span>course</span> at
            Scrimba.com. Next I started working at my <span>own projects</span>
            to expand my skills about JS & React.js, CSS and also
            CSS-preprocessor. I also participate at
            <span>commercial project</span> at Lombi.com. Where I working
            on frontend side.
            .
          </p>
        </div>
        <div
          className="app__about-section-card"
          data-aos="fade-in"
          data-aos-delay="900"
        >
          <span className="app__about-section-emoji">👨‍💻</span>
          <h2>Hobby</h2>
          <ul>
            <li>👉{""}Play in football</li>
            <li>👉{""}Cooking</li>
            <li>👉{""}Travelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About