import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <ul id="slide-mobile" className="sidenav">
      <li><Link to="/">Inicio</Link></li>
    </ul>
  );
};

export default SideNav;