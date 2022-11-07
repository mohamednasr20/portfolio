import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import "./Work.css";

const Work = () => {
  return (
    <div className="portfolio__Work container" id="work">
      <h2>Work Experience</h2>
      <h3>
        Front-End Developer, Essential Software & Design{" "}
        <span>(03/2022 – present) </span>
      </h3>
      <p>
        <div className="flex">
          <FaRegHandPointRight color="#64ffda" size={18} />

          <span className="desc">
            Essential Software & Design, Inc provides programming services to
            small businesses across the United States, ranging from medical
            systems to electronic publishing, As Front End Developer my core
            activities include:
          </span>
        </div>

        <ul>
          <li>
            {" "}
            Building Stable and maintainable codebase using React and
            Typescript.
          </li>
          <li>Building websites and apps that are responsive and usable.</li>
          <li>
            Collaborating with designers to ensure designs were efficient and
            technically sound.
          </li>
          <li>
            Maintaining an organized workflow using a project management tool
            (like GitHub).
          </li>
          <li>
            Monitoring website performance and rectifying front-end-related
            issues.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Work;
