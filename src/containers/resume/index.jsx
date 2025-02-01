import React from "react";
import { FaGraduationCap, FaBriefcase, FaFileDownload } from "react-icons/fa";
import "./styles.scss";

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-container">
        <h1 className="resume-title">My Resume</h1>
        
        {/* Education Section */}
        <div className="resume-section">
          <h2 className="section-title"><FaGraduationCap /> Education</h2>
          <div className="resume-item">
            <h3>Bachelor of Information Communication Technology</h3>
            <p>University of Ruhuna (202X - Present)</p>
            <p>Specialized in Web Development, Database Management, and Software Engineering.</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="resume-section">
          <h2 className="section-title"><FaBriefcase /> Experience</h2>
          <div className="resume-item">
            <h3>Frontend Developer</h3>
            <p>Freelance | 202X - Present</p>
            <p>Developed multiple web applications using React.js, Material-UI, and modern UI/UX principles.</p>
          </div>

          <div className="resume-item">
            <h3>Internship - Software Developer</h3>
            <p>[Company Name] | 202X</p>
            <p>Worked on real-world projects involving React, Spring Boot, and REST API development.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h2 className="section-title"><FaFileDownload /> Skills</h2>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Material-UI</li>
            <li>JavaScript (ES6+)</li>
            <li>Spring Boot</li>
            <li>SQL & MySQL</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* Resume Download Button */}
        <div className="resume-download">
          <a href="/resume.pdf" download className="download-btn">
            <FaFileDownload /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
