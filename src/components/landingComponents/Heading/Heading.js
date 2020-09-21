import React, { useEffect, useState } from 'react';
import styles from './Heading.module.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import M from 'materialize-css';
import reactGa from 'react-ga';

const Heading = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollPosition]);


  return (
    <nav className={`${styles.Nav_Transparent} ${scrollPosition > 50 ? styles.scrolled : ''}`}>
      <div className="nav-wrapper">
        <a data-target="slide-mobile" style={{ cursor: "pointer" }} className={`sidenav-trigger ${styles.Trigger}`}><i className="material-icons">menu</i></a>
        <Link to="/" onClick={() => scroll.scrollToTop()} className={`brand-logo ${styles.Header_Title}`}>Bocas IoT Monitoring</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down" style={{ marginRight: '5%' }}>
          <li><ScrollLink onClick={() => reactGa.event({ category: 'AboutRedirectionButton', action: 'Clicked the goto About section on landing page' })} to="AboutSection" offset={-60} duration={1000} spy={true} activeClass={styles.active_links} smooth={true} className={styles.Hover_color}>Acerca de</ScrollLink></li>
          <li><ScrollLink onClick={() => reactGa.event({ category: 'ResponsibleRedirectionButton', action: 'Clicked the goto Responsible section on landing page' })} to="ResponsibleSection" offset={-60} duration={600} spy={true} activeClass={styles.active_links} smooth={true} className={styles.Hover_color}>Responsables</ScrollLink></li>
          <li><ScrollLink onClick={() => reactGa.event({ category: 'CharacteristicRedirectionButton', action: 'Clicked the goto Characteristics section on landing page' })} to="CharacteristicSection" offset={-60} duration={600} spy={true} activeClass={styles.active_links} smooth={true} className={styles.Hover_color}>Características</ScrollLink></li>
          <li><Link onClick={() => reactGa.event({ category: 'LandingGoToLogin', action: 'Redirected to login page' })} to="/login" className="waves-effect waves-light btn blue">Iniciar Sesión</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Heading;