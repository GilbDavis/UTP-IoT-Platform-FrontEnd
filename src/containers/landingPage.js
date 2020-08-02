import React from 'react';

import Heading from '../components/landingComponents/Heading/Heading';
import Parallax from '../components/landingComponents/Parallax/Parallax';
import SideNav from '../components/landingComponents/SideNav/SideNav';
import About from '../components/landingComponents/About/About';
import Characteristics from '../components/landingComponents/Characteristics/Characteristics';

const landingPage = () => {
  return (
    <div>
      <Heading />
      <SideNav />
      <Parallax />
      <About />
      <Characteristics />
    </div>
  );
};

export default landingPage;