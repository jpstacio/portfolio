import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  // Typing effect setup
  const [text, setText] = useState('');
  const fullText = 'Welcome to My Portfolio';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className="centered-page">
      {/* Typing effect in action */}
      <h1>{text}</h1>
      <p>Hi, I'm Jayana Estacio — a senior pursuing a B.S. in Computer Science at the University of Washington, Tacoma. My academic journey is driven by a passion for cutting-edge technologies, with a focus on
         Generative AI and Medical Imaging. As an undergraduate research assistant, I’ve developed strong skills in data analysis, AI model development, and automation. I’m currently working on the LLaVa Med ICU Project, 
         where I apply Python, React, and other technical skills to solve real-world problems. As I look forward to applying to graduate school to continue exploring the intersection of AI and healthcare, 
         I am also open to software engineering roles where I can contribute and grow as part of a dynamic team. With experience in React, Node.js, FastAPI, and machine learning frameworks, I’m excited to bring my knowledge 
         and skills to new challenges.Feel free to check out my LinkedIn and GitHub below for more details on my work and accomplishments.
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
