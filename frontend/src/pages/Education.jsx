import React from "react";

function Education() {
  return (
    <div>
      <h1>Education</h1>
      <p>
        <strong>Diploma in Computer Programming (CPR)</strong><br />
         Centennial College<br />
        Expected Completion: 2026
      </p>

      <p>
        Relevant coursework includes:
        <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "500px" }}>
          <li>COMP 229 – Full Stack Web Development (MERN)</li>
          <li>COMM 170 – Communication & Technical Writing</li>
          <li>Database Management Systems</li>
          <li>Software Architecture & Design</li>
        </ul>
      </p>

      <p>
        These courses helped me develop real-world skills in modern web development,
        problem solving, and working in collaborative group projects.
      </p>
    </div>
  );
}

export default Education;