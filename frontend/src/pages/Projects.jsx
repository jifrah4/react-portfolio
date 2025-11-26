import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects"; // Correct import

function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">My Projects</h1>

      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>

          <p>{project.description}</p>

          {project.technologies && (
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
          )}

          {project.role && (
            <p>
              <strong>My Role:</strong> {project.role}
            </p>
          )}

          {project.github && (
            <p>
              <strong>GitHub Repository: </strong>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          )}

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}

          {project.link && (
            <Link to={project.link} className="project-btn">
              View Project
            </Link>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;