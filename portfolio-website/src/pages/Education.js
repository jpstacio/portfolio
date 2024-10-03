import React from 'react';
import './Education.css';

// Function to detect and style text inside square brackets
const formatText = (text) => {
  const parts = text.split(/(\[.*?\])/g); // Split text based on brackets
  return parts.map((part, index) =>
    part.startsWith('[') ? (
      <span key={index} className="pink-text">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Education = () => {
  const courses = [
    'Discrete Structures',
    'Data Structures',
    'Algorithms',
    'Artificial Intelligence and Knowledge Acquisition',
    'NLP Concepts',
    'Client Server Programming',
    'Fundamentals of PL',
  ];

  const orgs = [
    {
      title: '[Founder] The Programming Project',
      description: 'Created a club for students to develop technical skills through programming projects and challenges.',
    },
    {
      title: '[Undergraduate Representative] Computer Science and Systems Curriculum Board',
      description: 'Acted as a liaison between students and faculty, providing input on curriculum decisions and advocating for student needs.',
    },
    {
      title: '[Undergraduate] Research Assistant',
      description: 'Assisted in data analysis and research for the LLaVa Med ICU project, focusing on AI models for medical imaging.',
    },
    {
      title: '[ASUWT] Director of Student Technology',
      description: 'Led technology initiatives for the student government, improving student access to tech resources and organizing tech-related events.',
    },
  ];

  return (
    <div className="centered-page education-page">
      {/* University Section */}
      <div className="education-section">
        <h2>University</h2>
        <p>
          B.S in Computer Science from University of Washington, Tacoma <br />
          {formatText('[Expected Spring 2025]')}
        </p>
      </div>

      {/* Related Courses Section */}
      <div className="education-section">
        <h2>Related Courses</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      {/* Involvement Section */}
      <div className="education-section">
        <h2>Involvement</h2>
        <ul>
          {orgs.map((org, index) => (
            <li key={index}>
              <span className="pink-text">{org.title}</span>
              <p className="white-text">{org.description}</p> {/* Display description in white */}
            </li>
          ))}
        </ul>
      </div>

      {/* Awards Section */}
      <div className="education-section awards-section">
        <h2>Awards</h2>
        <p>Dean's List 2021</p>
      </div>
    </div>
  );
};

export default Education;
