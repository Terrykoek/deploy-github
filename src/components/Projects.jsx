import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

// Import images
import carImage from '../assets/car.jpeg'; // Adjust the path if necessary
import weatherImage from '../assets/weather.jpeg'; // Adjust the path if necessary
import imsImage from '../assets/IMS.jpeg'; // Adjust the path if necessary
import dataImage from '../assets/data.jpeg'; // Adjust the path if necessary

const projects = [
  {
    title: 'Race Car Game',
    description: 'A childhood arcade game with a twist of comedy created using HTML, CSS, Javascript, JQuery and AJAX.',
    image: carImage,
    link: 'https://terrykoek.github.io/Racing-Car-Game/'
  },
  {
    title: 'Whatstheweather',
    description: 'A weather app created using ReactJS and OpenweatherAPI..',
    image: weatherImage,
    link: 'https://terrykoek.github.io/whatstheweather/'
  },
  {
    title: 'Inventory Management System',
    description: 'A backend project done using Node.JS, AWS DynamoDB and Jest testing. An inventory management system with functions for creating, reading, and updating item records.',
    image: imsImage,
    link: 'https://github.com/Terrykoek/inventory-management-system'
  },
  {
    title: 'Data display app',
    description: 'This is a web application where users can upload a CSV file with financial data, and the application will display pie charts based on the uploaded data. React (Frontend), Flask (Backend)',
    image: dataImage,
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
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <div className="project-text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Project;
