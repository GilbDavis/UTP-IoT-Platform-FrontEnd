import React from 'react';

import Heading from '../components/landingComponents/Heading/Heading';
import Parallax from '../components/landingComponents/Parallax/Parallax';
import SideNav from '../components/landingComponents/SideNav/SideNav';

const landingPage = () => {
  return (
    <div>
      <Heading />
      <SideNav />
      <Parallax />
    </div>
  );
};

export default landingPage;