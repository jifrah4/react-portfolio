import React from "react";
import "../styles/Project.css";

const Projects = () => {
  return (
    <div className="page-container">
      <h1>My Projects</h1>

      <ul className="project-list">

        {/* Project 1 */}
        <li className="project-item">
          <a
            href="https://comm229-deployment.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Project 1 — PikaPika E-Commerce
          </a>
        </li>

        {/* Project 2 */}
        <li className="project-item">
          <a href="#/project2" className="project-link">
            Project 2 — Resume Builder
          </a>
        </li>

        {/* Project 3 */}
        <li className="project-item">
          <a
            href="https://jifrah4.github.io/react-portfolio/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Project 3 — Portfolio Website
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Projects;