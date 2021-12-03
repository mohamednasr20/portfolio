import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar gradient__bg">
      <div className="portfolio__navbar-links container scale-up-center">
        <div className="portfolio__navbar-links_logo">
          <h3 className="gradient__text">MN</h3>
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
          <button type="button">Resume</button>
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
          <div className="portfolio__navbar-menu_container scale-up-center">
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
              <button type="button">Resume</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
