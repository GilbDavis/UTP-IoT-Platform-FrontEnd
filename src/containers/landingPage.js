import React from 'react';

import Heading from '../components/landingComponents/Heading/Heading';
import Parallax from '../components/landingComponents/Parallax/Parallax';
import SideNav from '../components/landingComponents/SideNav/SideNav';
import About from '../components/landingComponents/About/About';

const landingPage = () => {
  return (
    <div>
      <Heading />
      <SideNav />
      <Parallax />
      <About />
    </div>
  );
};

export default landingPage;