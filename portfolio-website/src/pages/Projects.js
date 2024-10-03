import React, { useEffect } from 'react';
import './Projects.css'; 

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const technicalSkills = {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQLite', 'HTML/CSS', 'HTML5'],
    frameworks: ['React', 'Node.js', 'Next.js', 'FastAPI', 'Express', 'Phaser.js'],
    developerTools: ['Firebase', 'Git', 'GitHub', 'VSCode'],
  };

  const projects = [
    {
      title: 'Recipe Ready',
      technologies: ['React', 'FastAPI', 'OpenAI API'],
      description: 'Designed and built a full-stack web application using the OpenAI API to generate recipes based on user-provided ingredients.',
      link: 'https://github.com/yourusername/recipe-book',
    },
    {
      title: 'Sentiment Analysis on Mental Health Data',
      technologies: ['Python', 'NLTK', 'Pandas', 'Scikit-Learn'],
      description: 'Performed sentiment analysis on Reddit data to analyze sentiments around mental health using machine learning techniques.',
      link: 'https://github.com/yourusername/sentiment-analysis',
    },
  ];

  return (
    <div className="centered-page projects-page">
      {/* Technical Skills Section */}
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <p><strong className="languages-title">Languages:</strong> {technicalSkills.languages.join(', ')}</p>
        <p><strong className="frameworks-title">Frameworks:</strong> {technicalSkills.frameworks.join(', ')}</p>
        <p><strong className="developer-tools-title">Developer Tools:</strong> {technicalSkills.developerTools.join(', ')}</p>
      </div>

      {/* Projects Section */}
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-section">
          <h3>{project.title}</h3>
          <p className="technologies">
            <strong className="technologies-title">Technologies Used:</strong> {project.technologies.join(', ')}
          </p>
          <p className="description">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
