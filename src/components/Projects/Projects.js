import React from 'react';
import Project from './Project/Project';
import { projectsData } from './projectsData';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import './projects.css';

const Projects = () => {
  const { inView, ref } = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 3,
        bounce: 0.3,
      },
    });
  }
  return (
    <motion.div
      className="portfolio__projects  container"
      id="projects"
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.5,
      }}
      animate={animationControl}
    >
      <h3>Some Things I’ve Built</h3>
      <div className="portfolio__projects-showcase ">
        {projectsData.map((project, i) => (
          <Project project={project} duration={i + 3} key={project.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
