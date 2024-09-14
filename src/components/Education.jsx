import React from 'react';
import './Education.css';

const education = [
  {
    school: 'General Assembly',
    course: 'Software Engineering Immersive, Computer Science',
    dates: '2021',
    image: '/GA.jpeg'
  },
  {
    school: 'Nanyang Technological University',
    course: 'Bachelor of Engineering - BE, Mechanical Engineering',
    dates: '2017',
    image: '/ntu.jpeg'
  },
];

const Education = () => {
  return (
    <section id="Education">
      <h2>Education</h2>
      {education.map((education, index) => (
        <div key={index} className="education-slide">
          <img src={education.image} alt={education.school} className="education-image" />
          <div className="education-text-center">
            <h3>{education.school}</h3>
            <h3>{education.course}</h3>
            <p> {education.dates}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
