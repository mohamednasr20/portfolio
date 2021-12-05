import React from 'react';
import ProjectsList from './ProjectsList';
import ProjectDetailes from './ProjectDetailes';
import { AnimatePresence } from 'framer-motion';
import './projects.css';

const Projects = ({ match }) => {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <div className="portfolio__projects  container">
      <h2 className="gradient__text">Some Things I’ve Built</h2>
      <ProjectsList selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && (
          <ProjectDetailes id={id} key="projectDetailes" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
