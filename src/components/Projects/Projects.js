import React from 'react'
import projects from '../../constants/data';

import Project from './Project';

const Projects = () => {
  return (
    <div className="app__projects section__padding">
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
  );
}

export default Projects