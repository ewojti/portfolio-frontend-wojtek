import React, { useEffect } from "react";
import "./Project.scss";
import "aos/dist/aos.css";
import Aos from "aos";

const Project = ({
  title,
  description,
  image,
  gitHubLink,
  liveLink,
  technologies,
}) => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div
      className="app__project-card"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div>
        <div className="app__project-card-img">
          <img src={image} alt={title} />
        </div>
        <div className="app__project-card-text">
          <div className="app__project-card-tech">
            {technologies.map((tech) => (
              <div className="app__project-card-tech-btn" key={tech.toString()}>
                {tech}
              </div>
            ))}
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="app__project-card-view">
        <a
          href={liveLink}
          target="_blank"
          className="app__project-card-view-btn"
          rel="noreferrer"
        >
          <p>View Site</p>
        </a>
        <a
          href={gitHubLink}
          target="_blank"
          className="app__project-card-view-btn"
          rel="noreferrer"
        >
          <p>View Code</p>
        </a>
      </div>
    </div>
  );
};

export default Project;
