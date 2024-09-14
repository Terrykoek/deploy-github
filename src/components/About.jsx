import React from 'react';
import profile from '../assets/profile.jpeg'; // Update the path based on your file structure
import './About.css';

const About = () => (
  <section id="about">
    <img src={profile} alt="Terry" />
    <div className="about-text">
      <h2>HI, I'M TERRY</h2>
      <div className="text-container">
        <div className="title-description">
          FULL STACK DEVELOPER / SOFTWARE ENGINEER
        </div>
        <p>
          Forward-thinking software developer with background in Public Sector and experienced 
          in full stack applications development. Proud team player focused on achieving project 
          objectives with speed and accuracy.
        </p>
        <a href="#work-experience" className="scroll-button">Work Experience</a>
        <a href="#Education" className="scroll-button">Education</a>
        <a href="#projects" className="scroll-button">Projects</a>
        <a href="#get-in-touch" className="scroll-button">Contact me</a>
      </div>
    </div>
  </section>
);

export default About;
