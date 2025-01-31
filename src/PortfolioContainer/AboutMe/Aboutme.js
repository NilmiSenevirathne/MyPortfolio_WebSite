import React from 'react'
import './Aboutme.css';
import profileImage from '../../assets/home/ID photo.JPG';

export default function Aboutme() {
  return (
    <section className="about">
    <div className="about-image">
      <img src={profileImage} alt="Your Name" />
    </div>
    <div className="about-content">
      <h1>About Me</h1>
      <p>
        Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.
      </p>
      <h2>Here are a Few Highlights:</h2>
      <ul>
        <li>Full Stack Web and Mobile Development</li>
        <li>Interactive Front End as per the design</li>
        <li>React and React Native</li>
        <li>Redux for State Management</li>
        <li>Building REST API</li>
        <li>Managing Databases</li>
      </ul>
      <div className="about-buttons">
        <button className="hire-button">Hire Me</button>
        <button className="resume-button">Get Resume</button>
      </div>
    </div>
  </section>
  )
}
