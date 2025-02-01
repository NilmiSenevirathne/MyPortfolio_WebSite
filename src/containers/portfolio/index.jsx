import React from "react";
import "./styles.scss";

const projects = [
  {
    title: "Stock Management System",
    description: "A web-based system for tracking and managing inventory in real-time.",
    image: "/images/stock-management.jpg",
    link: "https://your-project-link.com"
  },
  {
    title: "AI-Driven Water Quality Management",
    description: "A research project using AI to monitor and predict water quality changes.",
    image: "/images/water-quality.jpg",
    link: "https://your-research-link.com"
  },
  {
    title: "Attendance Management System",
    description: "A comprehensive attendance tracking system for educational institutes.",
    image: "/images/attendance-system.jpg",
    link: "https://your-project-link.com"
  },
  {
    title: "Personal Portfolio Website",
    description: "A React-based personal portfolio showcasing my skills and projects.",
    image: "/images/portfolio-site.jpg",
    link: "https://your-portfolio-link.com"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <h1 className="portfolio-title">My Projects</h1>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <img src={project.image} alt={project.title} className="portfolio-card-image" />
              <div className="portfolio-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-card-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
