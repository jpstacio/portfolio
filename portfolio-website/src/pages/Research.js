import React, { useEffect } from 'react';
import './Research.css'; 

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const publications = [
    {
      title: 'Generative AI in Medical Imaging',
      description: '[insert publication at the end of the year]',
      link: '#', // Replace with actual link to publication
    },
  ];

  const lectures = [
    {
      title: 'Lecture Series: Introduction to Generative AI in Medical Imaging',
      description: 'An overview of how generative AI models are being applied in medical imaging to improve diagnostics and patient care.',
      link: 'https://your-link-to-slides.com', 
    },
    {
      title: 'Lecture Series: Exploring LLaVA-Med and other Multimodal Models',
      description: 'A deep dive into LLaVA-Med and other multimodal models that combine text and image data for enhanced medical imaging analysis.',
      link: 'https://your-link-to-slides.com', 
    },
    {
      title: 'Lecture Series: Data Processing and Training Generative AI Models',
      description: 'Covers the essential data preprocessing techniques and training processes for generative AI models in medical imaging.',
      link: 'https://your-link-to-slides.com', 
    },
    {
      title: 'Lecture Series: Model Training and Evaluation in Medical Imaging',
      description: 'Focuses on the methods used to train and evaluate generative AI models to ensure accuracy and reliability in medical imaging tasks.',
      link: 'https://your-link-to-slides.com', 
    },
    {
      title: 'Lecture Series: Applications and Future Directions in Medical Imaging AI',
      description: 'Examines current applications of AI in medical imaging and explores potential future developments in the field.',
      link: 'https://your-link-to-slides.com', 
    },
  ];
  

  const codeRepositories = [
    {
      title: 'ICU Project Repository',
      description: 'The goal is to solve issues relating to data imbalance and scarcity using Generative AI techniques, specifically diffusion based problems.',
      link: '#', 
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
