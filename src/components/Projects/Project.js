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
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>Tools used:</h2>
        <ul>
          {technologies.map(tech => (
            <li>{tech}</li>
          ))}
        </ul>
        <div className="app__project-card-share">
          <button>
          <FiGithub />
          </button>
          <button>
            View Site            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project