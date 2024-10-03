import React from 'react';
import './Research.css'; // Custom styles for the research page

const Research = () => {
  const publications = [
    {
      title: 'Generative AI in Medical Imaging',
      description: 'A deep dive into AI models used for medical image generation and diagnostics.',
      link: '#', // Replace with actual link to publication
    },
    {
      title: 'Ethical Considerations of AI in Healthcare',
      description: 'Exploring the ethical implications of using AI models in healthcare environments.',
      link: '#', // Replace with actual link to publication
    },
  ];

  const lectures = [
    {
      title: 'Lecture Series: Introduction to AI in Medicine',
      description: 'An introductory lecture on how AI models are transforming medical diagnostics.',
      date: 'August 2024',
      link: 'https://your-link-to-slides.com', // Add your actual link here
    },
    {
      title: 'Lecture Series: Advanced AI Techniques for Medical Imaging',
      description: 'A deep dive into the state-of-the-art AI techniques used in medical imaging.',
      date: 'September 2024',
      link: 'https://your-link-to-slides.com', // Add your actual link here
    },
  ];

  const codeRepositories = [
    {
      title: 'Medical Imaging AI Pipeline',
      description: 'A repository containing code for training and deploying AI models for medical imaging analysis.',
      link: '#', // Replace with actual link to code repository
    },
    {
      title: 'Ethical AI Toolkit',
      description: 'A toolkit designed to assess ethical considerations in AI model development.',
      link: '#', // Replace with actual link to code repository
    },
  ];

  return (
    <div className="centered-page research-page">
      {/* Research Overview Section */}
      <div className="research-section">
        <h2>Research Overview</h2>
        <p>
          <strong>Undergraduate Research Assistant</strong><br />
          University of Washington, Tacoma - LLaVa Med ICU Project<br />
          June 2024 – Present
        </p>
        <ul>
          <li>Conducted data analysis on large datasets by extracting random samples from structured metadata using Python’s pandas library.</li>
          <li>Developed scripts to automate random sampling and retrieval of reports for further research and analysis.</li>
          <li>Applied statistical techniques to analyze metadata and generate insights from report samples, enhancing data processing efficiency.</li>
          <li>Utilized Python programming to perform data manipulation tasks, including sampling, filtering, and organizing information for research purposes.</li>
        </ul>
      </div>

      {/* Publications Section */}
      <div className="research-section">
        <h2>Publications</h2>
        <ul>
          {publications.map((publication, index) => (
            <li key={index}>
              <span className="blink-arrow"> ➡️ </span> {/* Blinking arrow */}
              <a href={publication.link} target="_blank" rel="noopener noreferrer">
                {publication.title}
              </a>
              <p>{publication.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Lecture Series Section */}
      <div className="research-section">
        <h2>Lecture Series</h2>
        <ul>
          {lectures.map((lecture, index) => (
            <li key={index}>
              <span className="blink-arrow"> ➡️ </span> {/* Blinking arrow */}
              <a href={lecture.link} target="_blank" rel="noopener noreferrer" style={{ color: '#f92672' }}>
                {lecture.title}
              </a>
              <p>{lecture.description}</p>
              <p><em>Date: {lecture.date}</em></p>
            </li>
          ))}
        </ul>
      </div>

      {/* Code Overview Section */}
      <div className="research-section">
        <h2>Code Overview</h2>
        <ul>
          {codeRepositories.map((repo, index) => (
            <li key={index}>
              <span className="blink-arrow"> ➡️ </span> {/* Blinking arrow */}
              <a href={repo.link} target="_blank" rel="noopener noreferrer" style={{ color: '#f92672' }}>
                {repo.title}
              </a>
              <p>{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Research;
