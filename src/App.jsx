import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import GetInTouch from './components/GetInTouch';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <About />
        <Skills />
        <WorkExperience />
        <Education />
        <Certifications />
        <Projects />
        <GetInTouch/>
      </main>
    </div>
  );
}

export default App;
