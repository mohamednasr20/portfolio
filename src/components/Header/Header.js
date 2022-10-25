import React from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import "./Header.css";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 3, bounce: 0.3 },
  },
};

const Header = () => {
  return (
    <div className="portfolio__header" id="home">
      <motion.div
        className="portfolio__header-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <h2>
            Hello, I'm <span>Mohamed Nasr</span>
          </h2>
          <h1>I'm A Front-End Web Developer</h1>
          <a
            href="https://github.com/mohamednasr20"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className="portfolio__header-content__icon"
              color="#ccd6f6"
              size="42"
            />
          </a>
          <a
            href="https://www.codewars.com/users/mohamednasr20"
            target="_blank"
            rel="noreferrer"
          >
            <SiCodewars
              className="portfolio__header-content__icon"
              color="#ccd6f6"
              size="38"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamednasr86"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn
              className="portfolio__header-content__icon"
              color="#ccd6f6"
              size="42"
            />
          </a>
        </div>
      </motion.div>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#64ffda",
            },
            links: {
              color: "#64ffda",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "rectangle",
            },
            size: {
              random: true,
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Header;
