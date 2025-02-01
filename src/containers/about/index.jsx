import React from "react";
import { FaUserGraduate, FaLaptopCode, FaTools } from "react-icons/fa";
import "./styles.scss";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-container">
        <h1 className="about-me-title">About Me</h1>
        <p className="about-me-description">
          Hi, I'm <strong>[Your Name]</strong>, a passionate **Web Developer** specialized in React.js, 
          Material-UI, and modern web technologies. I love designing and developing 
          interactive, responsive web applications that provide a seamless user experience.
        </p>
        
        <div className="about-me-info">
          <div className="info-box">
            <FaUserGraduate size={30} className="info-icon" />
            <h3>Education</h3>
            <p>Bachelor of Information Communication Technology <br/> University of Ruhuna</p>
          </div>

          <div className="info-box">
            <FaLaptopCode size={30} className="info-icon" />
            <h3>Experience</h3>
            <p>Frontend Developer | React & Material-UI</p>
          </div>

          <div className="info-box">
            <FaTools size={30} className="info-icon" />
            <h3>Skills</h3>
            <p>React.js, Material-UI, JavaScript, Spring Boot, SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
