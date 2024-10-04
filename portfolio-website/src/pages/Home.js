import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Typing effect setup
  const [text, setText] = useState('');
  const fullText = 'Welcome to My Portfolio'; // Full text to display

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));  // Slice the string up to the current index
        index++;
      } else {
        clearInterval(interval); // Clear the interval once the full text is typed
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [fullText]);

  return (
    <div className="centered-page">
      {/* Typing effect */}
      <h1>{text}</h1>
      <p>
        Hi, I'm Jayana Estacio — a senior pursuing a B.S. in Computer Science at the University of Washington, Tacoma. My academic journey is driven by a passion for cutting-edge technologies, with a focus on Generative AI and Medical Imaging. As an undergraduate research assistant, I’ve developed strong skills in data analysis, AI model development, and automation. I’m currently working on the LLaVa Med ICU Project, where I apply Python, React, and other technical skills to solve real-world problems.
      </p>

      {/* Links Section */}
      <div className="links-section">
        <h2>Links</h2>
        <ul>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/jpstacio" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/jpstacio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </ul>
      </div>
    </div>
  );
};

export default Home;
