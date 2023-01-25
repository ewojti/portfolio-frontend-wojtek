import React, {useEffect} from 'react'
import projects from '../../constants/data';
import './Projects.scss'
import Project from './Project';
import "aos/dist/aos.css";
import Aos from "aos";

const Projects = () => {
    useEffect(() => {
      Aos.init({});
    }, []);
  return (
    <div className="app__projects section__padding">
      <h1
        // data-aos="zoom-in-down"
        data-aos="fade-left"
      >
        My Recent <span>Works</span>
      </h1>
      <h3 
      // data-aos="zoom-in-down" 
      data-aos="fade-left"
      >
        Here are a few projects I've worked on recently
      </h3>
      <div className="app__projects-cards">
        {projects.map((project, index) => (
          <Project
            key={project.title + index}
            title={project.title}
            description={project.description}
            image={project.image}
            gitHubLink={project.gitHubLink}
            liveLink={project.liveLink}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects