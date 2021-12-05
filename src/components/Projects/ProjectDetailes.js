import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from './projectsData';

const ProjectDetailes = ({ id }) => {
  const { description, title, imgUrl } = projectsData.find(
    (project) => project.id === id
  );
  console.log(description);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={imgUrl} alt="" />
          </motion.div>

          <motion.div className="content-container" animate>
            <h3 className="gradient__text">{title}</h3>

            <p>{description}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectDetailes;
