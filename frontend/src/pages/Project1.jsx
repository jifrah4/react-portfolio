import React from "react";
import "../styles/Project.css";

const Project1 = () => {
  return (
    <div className="project-page">
      <h1>Project 1 – PikaPika E-Commerce</h1>

      <p>
        A full-stack e-commerce clothing store with React, Node.js, Express, and MongoDB.
        Includes product management, authentication, cart system, and full CRUD operations.
      </p>

      <ul className="project-details">
        <li>⚡ MERN Stack – MongoDB, Express, React, Node.js</li>
        <li>📦 Product CRUD operations (add / edit / delete)</li>
        <li>🔐 JWT-based authentication (sign up / sign in)</li>
        <li>🛒 Fully functional cart + checkout UI</li>
        <li>🚀 Deployed backend + frontend on Render</li>
      </ul>

      <a
        href="https://comm229-deployment.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        👉 Visit Live Project
      </a>
    </div>
  );
};

export default Project1;