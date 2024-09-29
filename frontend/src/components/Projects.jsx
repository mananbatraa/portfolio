// Projects.jsx
import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Room Connect',
    description: 'A web application for managing and sharing room information for VIT students with features like taxi sharing and WhatsApp group integration.',
    techStack: ['React.js', 'Firebase'],
    liveDemo: 'https://room-connect.vercel.app/',
    github: 'https://github.com/nishant0207/room_connect',
  },
  {
    title: 'MailChamp.Ai',
    description: 'An automated email solution using MailChamp API, providing tailored email distribution and analytics for campaigns.',
    techStack: ['Node.js', 'React.js', 'MongoDB','Python'],
    liveDemo: 'https://mailchamp.ai/about',
    github: 'https://github.com/your-github-link-for-MailChamp',
  },
  {
    title: 'School Management System',
    description: 'A comprehensive platform for academic management, facilitating communication between students, faculty, and administration.',
    techStack: ['React.js','Node.js','MongoDB', 'Firebase'],
    liveDemo: 'https://schoolm.vercel.app/',
    github: 'https://github.com/nishant0207/school_management_project_MERN',
  },
  {
    title: 'Podcast App',
    description: 'An Android podcast application with seamless playback, user authentication via Firebase, and custom UI using Jetpack Compose.',
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    liveDemo: 'https://github.com/nishant0207/PodKast', // Link to GitHub for this project
    github: 'https://github.com/nishant0207/PodKast',
  },
  {
    title: 'Ethereum Transactions Tracker',
    description: 'A project focused on enhancing contributions and providing insights on repositories for better collaboration in GitHub.',
    techStack: ['Node.js', 'Telegram API','MongoDB'],
    liveDemo: 'https://your-live-demo-link.com',  // Add the live demo link here
    github: 'https://github.com/your-github-link-for-think-project',  // Add the GitHub repo link here
  }
];

const Projects = () => {
  return (
    
    <div className="projects-section">
      <h1 class="projects-title">
  <span>&lt;</span><span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span><span>&gt;</span>
</h1>

      <div className="projects-grid">
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
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Projects;