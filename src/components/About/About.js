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
import './about.css';
const About = () => {
  return (
    <div className="portfolio__about container" id="about">
      <div className="portfolio__about-content">
        <h3 className="gradient__text">About Me</h3>
        <div>
          <p>
            I'm a Front Developer located in USA with wealth of knowledge that I
            bring to every project.trustworthy and dependable with excellent
            communication skills.
          </p>

          <p>
            Creative and innovative and some one how enjoys contributing to new
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
        <h3 className="gradient__text">
          Here are a few technologies I’ve been working with recently
        </h3>
        <div className="portfolio__about-skills__iconsContainer">
          <FaHtml5 color="#FF5733" size="50" />
          <FaCss3Alt color="#00ffff" size="50" />
          <FaJs color="#FFFF00" size="50" />
          <FaReact color="#61DBFD" size="50" />
          <SiRedux color="#5b0a91" size="50" />
          <FaBootstrap color="#563d7c" size="50" />
          <FaNode color="#68a063" size="50" />
          <SiExpress color="#323330" size="50" />
          <SiMongodb color="#4DB33D" size="50" />
          <FaSass color="#CD6799" size="50" />
          <SiMaterialui color="#007FFF" size="50" />
          <FaNpm color="#CC3534" size="50" />
        </div>
      </div>
    </div>
  );
};

export default About;
