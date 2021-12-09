import React from 'react';
import { projectsData } from './projectsData';
import { AiFillCheckCircle, AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

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
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <AiFillGithub size="35" title="github-icon" />
                </a>
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <BiLinkExternal size="35" title="external-link-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
