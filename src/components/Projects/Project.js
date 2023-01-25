import React, { useEffect } from 'react';
import './Project.scss';
import 'aos/dist/aos.css';
import Aos from 'aos';


const Project = ({title, description, image, gitHubLink, liveLink, technologies}) => {
  useEffect(()=> {
    Aos.init({})
  }, [])
  return (
    <div className="app__project-card" 
    data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
     >
      <div className="app__project-card-img">
        <img src={image} alt="" />
      </div>
      <div className="app__project-card-text">
        <div className="app__project-card-tech">
          {technologies.map((tech) => (
            <div className="app__project-card-tech-btn">{tech}</div>
          ))}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="app__project-card-view">
        <div className="app__project-card-view-btn">View Site</div>
        <div className="app__project-card-view-btn">View Code</div>
      </div>
    </div>
  );
}

export default Project