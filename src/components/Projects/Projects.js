import React from 'react';
import { projectsData } from './projectsData';
import { AiFillCheckCircle } from 'react-icons/ai';

import './projects.css';

const Projects = () => {
  return (
    <div className="portfolio__projects  container" id="projects">
      <h3>Some Things I’ve Built</h3>
      <div className="portfolio__projects-showcase ">
        {projectsData.map((project) => (
          <div className="portfolio__project">
            <div className="portfolio__project-img">
              <img src={project.imgUrl} alt="screenshot" />
            </div>
            <div className="portfolio__project-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                {project.technology.map((t) => (
                  <li>
                    <AiFillCheckCircle color="#64ffda" size="18" /> {t}
                  </li>
                ))}
              </ul>
              <div>
                <a href="">View Code</a>
                <a href="">Visit Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
