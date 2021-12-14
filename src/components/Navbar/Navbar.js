import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaMastodon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import resume from '../../assests/MyResume.pdf';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', duration: 3, bounce: 0.3 },
    },
  };

  return (
    <motion.div
      className="portfolio__navbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="portfolio__navbar-links container">
        <div className="portfolio__navbar-links_logo">
          <a href="#home">
            <FaMastodon color="#64ffda" size="65" />
          </a>
        </div>
        <div className="portfolio__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className="portfolio__navbar-resume">
          <button type="button">
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </button>
        </div>
      </div>

      <div className="portfolio__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <motion.div
            className="portfolio__navbar-menu_container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="portfolio__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#projects">Projects</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
            <div className="portfolio__navbar-menu_container-links-resume">
              <button type="button">
                <a href={resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
