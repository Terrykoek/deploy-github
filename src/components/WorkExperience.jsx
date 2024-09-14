import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    title: 'Research Engineer (Full-Stack Developer)',
    company: 'Singapore-MIT Alliance for Research & Technology Centre (SMART)',
    dates: 'Apr 2023 - Present',
    description: [
      'Lead design, implementation and testing of a prototype geospatial web application.',
      'Work on both front-end and back-end development, including both the server-side interface and UI/UX design.',
      'Interact with our analytical engine developer, users and scientists to gather requirements and iteratively improve responsiveness and usability.',
      'Create and consume RESTful APIs to make use of external web services.',
      'Build clean, efficient, well-documented and secure code.',
      'Maintain quality by participating in code review and setting up and maintaining test frameworks.'
    ],
    image: '/Smart.jpeg'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Government Technology Agency (GovTech)',
    dates: 'Jan 2023 - Jan 2024',
    description: [
      'Design scalable architectures.',
      'Write code that is clean and maintainable.',
      'Practice pair programming or code reviews.',
      'Write unit tests and integration tests.',
      'Work with a range of technologies, and tackle a wide variety of challenges across the technical stack.',
      'Collaborate closely with other specialists within an agile and collaborative team environment, including: i. Advocating a positive team culture ii. Working with UX Designers to implement their designs into working software iii. Working with DevOps Engineers to manage builds and releases iv. Assisting Product/Delivery Managers in technical assessment of new feature requests or engagements.'
    ],    
    image: '/gov.jpeg'
  },
  {
    title: 'Software Engineer',
    company: 'ST Engineering Mission Software & Services Pte Ltd',
    dates: 'Sep 2019 - Jan 2023',
    description: [
      'Collaborate with other developers and engineers to design, build and maintain applications.',
      'Develop end-to-end specifications for solution components.',
      'Perform testing and implementation of the solution.',
      'Troubleshoot software issues and participate in impact analyst of encountered issues.',
      'Generate relevant documentations, reports etc',
      'Contribute to continuous improvement of software development best practices.',
      'Keeping up-to-date with industry trends and technology developments.'
    ],
    image: '/ST.jpeg'
  },
  {
    title: 'Assistant Manager',
    company: 'National Library Board',
    dates: 'June 2018 - Dec 2020',
    description: [
      'Manage the end-to-end procurement process, including GeBIZ transactions, from review of procurement documents to preparation of contractual documents.',
      'Raise staff awareness of procurement matters through the regular engagement of staff e.g. conduct briefings to staff on procurement policies and guidelines.',
      'Participate in projects to improve NLB’s procurement processes through automation, technology and analytics.'
    ],
    image: '/NLB.jpeg'
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-slide">
          <img src={exp.image} alt={exp.title} className="experience-image" />
          <div className="experience-text-center">
            <h3>{exp.title}</h3>
            <h3>{exp.company}</h3>
            <p> {exp.dates}</p>
            {Array.isArray(exp.description) ? (
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p>{exp.description}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
