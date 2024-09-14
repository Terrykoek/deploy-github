// src/components/Skills.jsx
import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faNodeJs, faJs, faReact, faGitAlt, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'NodeJS', icon: faNodeJs },
  { name: 'Typescript', icon: faJs },
  { name: 'Javascript', icon: faJs },
  { name: 'ReactJS', icon: faReact },
  { name: 'MongoDB', icon: faDatabase },
  { name: 'DynamoDB', icon: faDatabase },
  { name: 'GIT', icon: faGitAlt },
  { name: 'AWS', icon: faAws },
  { name: 'Python', icon: faJs } // Adjust this icon, as there's no official Python icon in Font Awesome
];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          <FontAwesomeIcon icon={skill.icon} /> {skill.name}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
