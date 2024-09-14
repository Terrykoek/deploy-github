import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

// Sample data for the carousel
const projects = [
  {
    title: 'Race Car Game',
    description: 'A childhood arcade game with a twist of comedy created using HTML, CSS, Javascript, JQuery and AJAX.',
    image: '/car.jpeg',
    link: 'https://terrykoek.github.io/Racing-Car-Game/'
  },
  {
    title: 'Whatstheweather',
    description: 'A weather app created using ReactJS and OpenweatherAPI..',
    image: '/weather.jpeg',
    link: 'https://terrykoek.github.io/whatstheweather/'
  },
  {
    title: 'Inventory Management System',
    description: 'A backend project done using Node.JS, AWS DynamoDB and Jest testing. An inventory management system with functions for creating, reading, and updating item records.',
    image: '/IMS.jpeg',
    link: 'https://github.com/Terrykoek/inventory-management-system'
  },
  {
    title: 'Data display app',
    description: 'This is a web application where users can upload a CSV file with financial data, and the application will display pie charts based on the uploaded data. React (Frontend), Flask (Backend)',
    image: 'data.jpeg',
    link: 'https://github.com/Terrykoek/Data-display-project'
  },
  // Add more projects as needed
];

const Project = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((exp, index) => (
          <div key={index} className="project-slide">
            <a href={exp.link} target="_blank" rel="noopener noreferrer">          
              <img src={exp.image} alt={exp.title} className="project-image" />
            </a>
            <div className="project-text">
              <h3>{exp.title}</h3>
              <p> {exp.dates}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Project;
