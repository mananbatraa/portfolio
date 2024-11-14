// Projects.jsx
import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Room Connect',
    description: 'A web application for managing and sharing room information for VIT students with features like taxi sharing and WhatsApp group integration.',
    techStack: ['React.js', 'Firebase'],
    liveDemo: '',
    github: 'https://github.com/nishant0207/room_connect',
  },
  {
    title: 'Phishing Detector',
    description: 'A URL Phishing Detection Model to identify malicious links by analyzing domain structure, keywords, and patterns indicative of phishing. Trained on extensive datasets, enabling real-time classification of URLs as legitimate or fraudulent to enhance cybersecurity defenses.',
    techStack: ['Python', 'MongoDB','Docker'],
    liveDemo: '',
    github: 'https://github.com/mananbatraa/phishing_detector',
  },
  {
    title: 'GPS Tracker',
    description: 'An Android application enabling real-time location tracking with current address and geo-coordinates, featuring location saving and toggleable tracking functionality.',
    techStack: ['Java', 'Google Map API'],
    liveDemo: '',
    github: 'https://github.com/mananbatraa/GPS-TRACKER',
  },
  {
    title: 'School Management System',
    description: 'A comprehensive platform for academic management, facilitating communication between students, faculty, and administration.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Firebase'],
    liveDemo: 'https://schoolm.vercel.app/',
    github: 'https://github.com/nishant0207/school_management_project_MERN',
  },
  {
    title: 'CommuniCat',
    description: 'An Android application facilitating real-time group chat and user profile management to enhance communication experiences for diverse users.',
    techStack: ['Java', 'Firebase'],
    liveDemo: '', // No demo link available
    github: 'https://github.com/mananbatraa/COMMUNICAT', // Add the GitHub repo link here
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="projects-title" style={{ color: 'black' }}>&lt;projects&gt;</h1>
      {/* Carousel container for projects */}
      <div className="projects-carousel">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;