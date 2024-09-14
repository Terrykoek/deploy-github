import React from 'react';
import './Education.css';

// Import images
import gaImage from '../assets/GA.jpeg'; // Update the path based on your file structure
import ntuImage from '../assets/ntu.jpeg'; // Update the path based on your file structure

const education = [
  {
    school: 'General Assembly',
    course: 'Software Engineering Immersive, Computer Science',
    dates: '2021',
    image: gaImage,
  },
  {
    school: 'Nanyang Technological University',
    course: 'Bachelor of Engineering - BE, Mechanical Engineering',
    dates: '2017',
    image: ntuImage,
  },
];

const Education = () => {
  return (
    <section id="Education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-slide">
          <img src={edu.image} alt={edu.school} className="education-image" />
          <div className="education-text-center">
            <h3>{edu.school}</h3>
            <h3>{edu.course}</h3>
            <p>{edu.dates}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
