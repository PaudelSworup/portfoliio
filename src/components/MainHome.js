import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Teams from './Teams';


const MainHome = () => {
  return (
      <> 
      <Navbar />
      <Home/>
      <About classname = "about-width  max-width aboutreveal"/>
      <Services classname = "servicwa-width  max-width servicesreveal"/>
      <Skills  classname = "skills-width  max-width skillsreveal"/>
      <Teams classname = "teams-width  max-width teamsreveal"/>
      </>
  );
};

export default MainHome;
