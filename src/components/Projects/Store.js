import React from 'react';
import List from './List/List';
import ProjectDetailes from './ProjectDetailes/ProjectDetailes';
import { AnimatePresence } from 'framer-motion/dist/es/index';
import './store.css';

const Projects = ({ match }) => {
  let { id } = match.params;
  const imageHasLoaded = true;
  console.log(match.params);
  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && (
          <ProjectDetailes id={id} key="projectDetailes" />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
