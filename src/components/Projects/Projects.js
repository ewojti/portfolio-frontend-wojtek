import React from 'react'
import projects from '../../constants/data';
import './Projects.scss'
import Project from './Project';

const Projects = () => {
  return (
    <div className="app__projects section__padding">
      <h1>
        My Recent <span>Works</span>
      </h1>
      <h3>Here are a few projects I've worked on recently</h3>
      <div className='app__projects-cards'>
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