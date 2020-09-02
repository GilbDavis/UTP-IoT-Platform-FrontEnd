import React, { useEffect, useContext } from 'react';
import styles from './NavarBar.module.scss';
import M from 'materialize-css';
import AuthContext from '../../context/authentication/authContext';

const NavBar = () => {

  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className={`navbar-fixed ${styles.NavBar}`}>
      <nav className="white">
        <div className="nav-wrapper">
          <a data-target="slide-out" style={{ cursor: 'pointer' }} className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
          <ul className={`right ${styles.Navigation_Links}`}>
            <li className={styles.Menu_Li}><a onClick={cerrarSesion} className={styles.Menu_Li__Link}><i className="material-icons grey-text" style={{ fontSize: '32px' }}>power_settings_new</i></a></li>
          </ul>
        </div>
      </nav>
    </div >
  );
};

export default NavBar;