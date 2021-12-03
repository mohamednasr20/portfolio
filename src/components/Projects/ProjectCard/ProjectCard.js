import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion/dist/es/index';

import './projectCard.css';

const ProjectCard = ({ id, title, imgUrl }) => {
  return (
    <li className="card">
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={imgUrl} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
};

export default ProjectCard;
