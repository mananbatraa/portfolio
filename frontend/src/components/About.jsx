import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">&lt;about&gt;</h1>

      <div className="about-content">
        <div className="about-text">
          <p className="intro-text">
            I'm Manan Batra, a passionate and driven student currently pursuing a 
            <span> B.Tech in Computer Science and Business Systems</span> at Vellore Institute of Technology.
            With a strong foundation in <span>software development and business systems</span>, I enjoy solving complex problems
            and building innovative solutions. From <span>automating business processes to developing real-time Android applications</span>, 
            I continuously strive to expand my technical skill set and apply it to real-world challenges.
          </p>
          <p>
            I am skilled in languages such as <span>Java, C++, and Python</span>, and proficient in tools like 
            <span> GitHub, Firebase, and Android Studio</span>. My experience ranges from internships where I contributed 
            to process automation to leading teams and organizing events in various extracurricular activities.
          </p>
          <p>
            Whether it's <span>programming, project development,</span> or <span>collaboration on exciting ideas</span>, I am always 
            eager to learn and grow. Explore my portfolio to see some of the work I’ve done, and feel free to connect!
          </p>
        </div>

        <div className="about-image-container">
          <img src="manan_bata.jpg" alt="Manan Batra" className="about-image" />

          <div className="about-icons">
            <a href="https://github.com/mananbatraa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://leetcode.com/u/mananbatraa/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="resume-button">
        <a href="https://drive.google.com/file/d/1heezpijDJNqfGV-g1oyDspflwk8Ml_0W/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
};

export default About;
