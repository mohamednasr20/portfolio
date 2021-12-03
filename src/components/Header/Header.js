import React from 'react';
import Particles from 'react-tsparticles';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <div className="portfolio__header" id="home">
      <div className="portfolio__header-content scale-up-center">
        <div>
          <h2>Hello, I'm Mohamed Nasr</h2>
          <h1 className="gradient__text">I'm a Front-End Web Developer</h1>
          <FaGithub
            className="portfolio__header-content__icon"
            color="#81afdd"
            size="42"
          />
          <FaLinkedinIn
            className="portfolio__header-content__icon"
            color="#81afdd"
            size="42"
          />
          <FaTwitter
            className="portfolio__header-content__icon"
            color="#81afdd"
            size="42"
          />
        </div>
      </div>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
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
              value: '#81afdd',
            },
            links: {
              color: '#81afdd',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'rectangle',
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
