import React from 'react';
import { AiFillCheckCircle, AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './project.css';

const Project = ({ project, duration }) => {
  const { inView, ref } = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      opacity: 1,
      y: 0,

      transition: {
        type: 'spring',
        duration: duration,
        bounce: 0.3,
      },
    });
  }

  return (
    <motion.div
      className="portfolio__project"
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={animationControl}
    >
      <div className="portfolio__project-img">
        <img src={project.imgUrl} alt="screenshot" />
      </div>
      <div className="portfolio__project-content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <ul>
          {project.technology.map((t, i) => (
            <li key={i}>
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
    </motion.div>
  );
};

export default Project;
