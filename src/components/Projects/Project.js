import React from 'react'
import { FiGithub } from "react-icons/fi";
import images from '../../constants/images';
import './Project.scss'


const Project = ({title, description, image, gitHubLink, liveLink, technologies}) => {
  return (
    <div className="app__project-card">
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
          <div className="app__project-card-view-btn">View Code</div>
          <div className="app__project-card-view-btn">View Site</div>
        </div>
    </div>
  );
}

export default Project