import React, { useEffect, useState } from 'react';
import './Skills.css';
import axios from 'axios';

const Skills = () => {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [languages, setLanguages] = useState(['HTML','JavaScript', 'Python', 'C++', 'Java','SQL', 'R']); // Hardcoded languages
  const [toolsPlatforms, setToolsPlatforms] = useState(['Git', 'Docker', 'AWS', 'Firebase', 'Jenkins', 'Linux']); // Hardcoded tools and platforms

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/leetcode-stats');
        setLeetcodeStats(response.data);
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return (
    <div className="skills-section">
      <h1 className="skills-title">&lt;skills&gt;</h1>

      <div className="skills-container">
        {/* Skill bars code */}
      </div>

      {/* Languages Known section */}
      <h2 className="languages-title">"Languages Known"</h2>
      <div className="languages-container">
        <ul className="languages-list">
          {languages.map((language, index) => (
            <li key={index} className="language-item">{language}</li>
          ))}
        </ul>
      </div>

      {/* Tools and Platforms section */}
      <h2 className="tools-title">"Tools and Platforms"</h2>
      <div className="tools-container">
        <ul className="tools-list">
          {toolsPlatforms.map((tool, index) => (
            <li key={index} className="tool-item">{tool}</li>
          ))}
        </ul>
      </div>

      <h2 className="leetcode-title">"LeetCode Stats"</h2>
      {leetcodeStats ? (
        <div className="leetcode-container">
          <div className="leetcode-solved">
            <h3>{leetcodeStats.easySolved + leetcodeStats.mediumSolved + leetcodeStats.hardSolved}/3284</h3>
            <p>Solved</p>
          </div>
          <div className="leetcode-difficulty">
            <p><span className="easy">Easy</span>: {leetcodeStats.easySolved}</p>
            <p><span className="medium">Medium</span>: {leetcodeStats.mediumSolved}</p>
            <p><span className="hard">Hard</span>: {leetcodeStats.hardSolved}</p>
          </div>
        </div>
      ) : (
        <p>Loading LeetCode Stats...</p>
      )}
    </div>
  );
};

export default Skills;
