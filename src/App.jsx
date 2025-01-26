import Hero from './pages/Hero';
import React from 'react';
import { Link, Element } from 'react-scroll';
import Section from './pages/Section';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import { animate } from 'framer-motion';
const animationVariants = {
  initial: { opacity: 0, y: 50 }, // Start from below
  animate: { opacity: 1, y: 0 }, // Fade in as scroll happens
};

const App = () => {
  return (
    <div className='bg-primary '>
      {/* <Section animation={animationVariants}> */}

      <Hero />
      {/* </Section> */}
      <div className="flex justify-center items-center py-4">
        <nav className="hidden md:absolute md:top-4 md:w-fit md:bg-accent md:bg-opacity-90 md:text-white md:py-2 md:px-4 md:rounded-lg md:shadow-lg md:z-50 md:flex md:flex-row md:items-center md:justify-center md:space-x-2">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer px-4 py-2 text-center hover:bg-gray-700 rounded-md transition">About</Link>
          <Link to="education" smooth={true} duration={500} className="cursor-pointer px-4 py-2 text-center hover:bg-gray-700 rounded-md transition">Education</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer px-4 py-2 text-center hover:bg-gray-700 rounded-md transition">Experience</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer px-4 py-2 text-center hover:bg-gray-700 rounded-md transition">Projects</Link>
          {/* <Link to="skills" smooth={true} duration={500} className="cursor-pointer px-4 py-2 text-center hover:bg-gray-700 rounded-md transition">Skills</Link> */}
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer px-4 py-2 text-center hover:bg-gray-700 rounded-md transition">Connect</Link>
        </nav>
      </div>
      <Element name="about">
        <About />
      </Element>
      {/* <Element name="skills">
        <Skills />
      </Element> */}
      <Element name="education">
        <Education />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
