import React from 'react';
import './Certifications.css';

const certification = [
  {
    cert: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    dates: '2024',
  },
  {
    cert: 'Javascript (Basic) Certificate',
    issuer: 'Hackerrank',
    dates: '2017',
  },
];

const Certification = () => {
  return (
    <section id="Certification">
      <h2>Certification</h2>
      {certification.map((certification, index) => (
        <div key={index} className="certification-slide">
          <div className="certification-text-center">
            <h3>{certification.cert}</h3>
            <h3>issuer: {certification.issuer}</h3>
            <p> Date: {certification.dates}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certification;
