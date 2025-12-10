
import profilePic from "../assets/profilepic.jpg";
import resumePDF from "../assets/resume.pdf";

const About = () => {
  return (
    <div className="page-container">
      <h1>About Me</h1>

      <img src={profilePic} alt="Profile" className="profile-img" />

      <p>I am a software developer specializing in full-stack JavaScript, MERN, and modern web technologies.</p>

      <a href={resumePDF} target="_blank" className="resume-button">
        📄 Download Resume
      </a>
    </div>
  );
};
export default About;