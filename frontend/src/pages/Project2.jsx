import React from "react";
import "./Project2.css";

function Project2() {
  return (
    <section className="project-container">
      <h1>Project 2 – Resume Builder Application</h1>

      <p>
        A web-based resume builder that allows users to enter personal, education,
        and professional experience to dynamically create a professional resume.
        The application uses React state management and form validation to ensure
        accurate input and a downloadable result.
      </p>

      <p><b>Technologies:</b> React, JavaScript, CSS3, React Hooks</p>

      <p><b>My Role:</b> Developed the UI layout and implemented state logic
        for real-time preview. I also handled styling and responsiveness for
        mobile and desktop users.
      </p>

      <p>
        <b>GitHub Repository: </b>
        <a href="https://github.com/jifrah4/resume-builder" target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </p>
    </section>
  );
}

export default Project2;