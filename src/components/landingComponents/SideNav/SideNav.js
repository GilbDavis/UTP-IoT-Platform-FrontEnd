import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Sidenav.scss';
import reactGa from 'react-ga';

const SideNav = () => {
  return (
    <ul id="slide-mobile" className="sidenav slide-out" style={{ zIndex: 2000 }}>
      <li className="SideNavLi"><ScrollLink onClick={() => reactGa.event({ category: 'AboutMobileRedirectButton', action: 'Redirected to about section' })} to="AboutSection" offset={-55} duration={1000} spy={true} activeClass="active_links" smooth={true} className="waves-effect sidenav-close AnchorLinks">Acerca de</ScrollLink></li>
      <li className="SideNavLi"><ScrollLink onClick={() => reactGa.event({ category: 'ResponsibleMobileRedirectionButton', action: 'Redirected to responsible section' })} to="ResponsibleSection" offset={-55} duration={600} spy={true} activeClass="active_links" smooth={true} className="waves-effect sidenav-close AnchorLinks">Responsables</ScrollLink></li>
      <li className="SideNavLi"><ScrollLink onClick={() => reactGa.event({ category: 'CharacteristicMobileRedirecitonButton', action: 'Redirected to characteristic section' })} to="CharacteristicSection" offset={-55} duration={600} spy={true} activeClass="active_links" smooth={true} className="waves-effect sidenav-close AnchorLinks">Características</ScrollLink></li>
      <li className="SideNavLi"><Link onClick={() => reactGa.event({ category: 'LoginMobileRedirectionButton', action: 'Redirected the user to login page' })} to="/login" className="waves-effect waves-light btn-small blue sidenav-close">Iniciar Sesión</Link></li>
    </ul>
  );
};

export default SideNav;