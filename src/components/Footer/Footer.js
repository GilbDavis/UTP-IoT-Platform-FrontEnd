import React from 'react';
import styles from './Footer.module.scss';

import logoUtp from '../../assets/logo_utp.png';
import logoFisc from '../../assets/logo_fisc.png';

const Footer = () => {
  return (
    <footer className={styles.Footer_Container}>
      <div className={styles.Logos_Container}>
        <div className={styles.Logos_content}>
          <h4>Universidad</h4>
          <img src={logoUtp} />
        </div>
        <div className={styles.Logos_content}>
          <h4>Facultad</h4>
          <img src={logoFisc} />
        </div>
      </div>
      <hr></hr>
      <div className={styles.Copyright}>
        <p>&copy;2020 Gilberto Davis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;