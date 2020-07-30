import React, { useEffect } from 'react';
import styles from './Heading.module.scss';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Heading = () => {

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <nav className={styles.Nav_Transparent}>
      <div className="nav-wrapper">
        <a data-target="slide-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <Link to="/" className={`brand-logo ${styles.Header_Title}`}>Bocas IoT Monitoring</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down" style={{ marginRight: '5%' }}>
          <li><a className={styles.Hover_color} href="#AboutSection">Acerca de</a></li>
          <li><a className={styles.Hover_color} href="#">Características</a></li>
          <li><a className={styles.Hover_color} href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Heading;