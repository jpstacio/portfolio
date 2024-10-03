import React from 'react';
import './Education.css';

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
    '[Founder] The Programming Project',
    '[Undergraduate Representative] Computer Science and Systems Curriculum Board',
    '[Undergradute] Research Assistant',
    '[ASUWT] Director of Student Technology',
  ];

  return (
    <div className="centered-page education-page">
      {/* University Section */}
      <div className="education-section">
        <h2>University</h2>
        <p>
          B.S in Computer Science from University of Washington, Tacoma <br />
          [Expected Spring 2025]
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
            <li key={index}>{org}</li>
          ))}
        </ul>
      </div>

      {/* Awards Section */}
      <div className="education-section awards-section">
        <h2>Awards</h2>
        <p>
          Dean's List 2021
        </p>
      </div>
    </div>
  );
};

export default Education;
