import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/Project.css";

const Project2 = () => {
  const [template, setTemplate] = useState("modern");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // PDF Download Function
  const downloadPDF = () => {
    const resume = document.getElementById("resume-preview");

    html2canvas(resume, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`${form.fullName || "resume"}.pdf`);
    });
  };

  return (
    <div className="resume-builder-container">
      <h1>Project 2 — Resume Builder</h1>

      {/* Template Selector */}
      <div className="template-selector">
        <label>Select Template:</label>
        <select value={template} onChange={(e) => setTemplate(e.target.value)}>
          <option value="modern">Modern</option>
          <option value="simple">Simple</option>
          <option value="professional">Professional</option>
        </select>
      </div>

      <div className="resume-builder-wrapper">
        {/* Form */}
        <div className="resume-form">
          <h2>Resume Form</h2>

          <input name="fullName" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />

          <textarea name="summary" placeholder="Professional Summary" onChange={handleChange} />
          <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
          <textarea name="experience" placeholder="Work Experience" onChange={handleChange} />
          <textarea name="education" placeholder="Education" onChange={handleChange} />

          <button className="pdf-btn" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>

        {/* Resume Preview */}
        <div id="resume-preview" className={`resume-preview ${template}`}>
          <h2>{form.fullName || "Your Name"}</h2>
          <p>{form.email}</p>
          <p>{form.phone}</p>

          <hr />

          <h3>Professional Summary</h3>
          <p>{form.summary}</p>

          <h3>Skills</h3>
          <ul>
            {form.skills.split(",").filter(Boolean).map((skill, i) => (
              <li key={i}>{skill.trim()}</li>
            ))}
          </ul>

          <h3>Experience</h3>
          <p>{form.experience}</p>

          <h3>Education</h3>
          <p>{form.education}</p>
        </div>
      </div>
    </div>
  );
};

export default Project2;