import React from 'react'
import { FiGithub } from "react-icons/fi";
import images from '../../constants/images';
import './Project.scss'


const Project = ({title, description, image, gitHubLink, liveLink, technogies}) => {
  return (
    <div className="app__project">
      <div className="app__project-img">
        <img src={image} alt="" />
      </div>
      <div className="app__project-text">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="app__project-share">
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