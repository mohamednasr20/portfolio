import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNode,
  FaSass,
  FaNpm,
} from 'react-icons/fa';
import { SiRedux, SiExpress, SiMongodb, SiMaterialui } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './about.css';

const About = () => {
  const { inView, ref } = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 3,
        bounce: 0.3,
      },
    });
  }

  const skillsIcons = [
    <FaHtml5 color="#FF5733" size="50" />,
    <FaCss3Alt color="#00ffff" size="50" />,
    <FaJs color="#FFFF00" size="50" />,
    <FaReact color="#61DBFD" size="50" />,
    <SiRedux color="#5b0a91" size="50" />,
    <FaBootstrap color="#563d7c" size="50" />,
    <FaNode color="#68a063" size="50" />,
    <SiExpress color="#323330" size="50" />,
    <SiMongodb color="#4DB33D" size="50" />,
    <FaSass color="#CD6799" size="50" />,
    <SiMaterialui color="#007FFF" size="50" />,
    <FaNpm color="#CC3534" size="50" />,
  ];

  return (
    <motion.div
      className="portfolio__about container"
      id="about"
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={animationControl}
    >
      <div className="portfolio__about-content">
        <h2>About Me</h2>
        <div>
          <p>
            I'm a Front End Developer located in United States with wealth of
            knowledge that I bring to every project.trustworthy and dependable
            with excellent communication skills.
          </p>

          <p>
            Creative and innovative and some one who enjoys contributing to new
            projects. As a developer I understand the importance of form as well
            as function. I take great pride in delevring sites which are
            visually apealling easy to use and quick to load.
          </p>
          <p>
            All of these factors combine to provide an excellent user experience
            every time.
          </p>
        </div>
      </div>
      <div className="portfolio__about-skills">
        <h3>Here are a few technologies I’ve been working with recently</h3>
        <ul className="portfolio__about-skills__iconsContainer">
          {skillsIcons.map((skillIcon, i) => (
            <li key={i}>{skillIcon}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
