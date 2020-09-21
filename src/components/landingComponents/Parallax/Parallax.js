import React from 'react';
import styles from './Parallax.module.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import reactGa from 'react-ga';

const Parallax = () => {
  return (
    <div id="HomeSection" className={styles.Parallax_Container}>
      <div className={styles.HeaderContainer}>
        <span>UTP Bocas del Toro</span>
        <h1>Plataforma de monitoreo de señales IoT</h1>
        <div className={styles.Buttons_Container}>
          <Link to="/login" className={`waves-effect waves-light btn-large  ${styles.Login_link}`}>Ir al sitio</Link>
          <ScrollLink onClick={() => reactGa.event({ category: 'AboutRedirectionButton', action: 'Clicked the goto About section on landing page' })} to="AboutSection" offset={-60} duration={1000} spy={true} smooth={true} className={`waves-effect waves-light btn-large ${styles.know_link}`}>Saber más</ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Parallax;