import React from 'react';
import styles from './Responsible.module.scss';

import DavisImg from '../../../assets/davis-image.jpg';
import MendozaImg from '../../../assets/mendoza-image.jpg';

const Responsible = () => {

  return (
    <div id="ResponsibleSection" className={styles.Responsible_Container}>
      <div className={styles.Responsible_Content_Container}>
        <h2>Equipo de Trabajo</h2>
        <div className={styles.Heading_Divider}><span></span></div>
        <ul className={styles.Profile_Container}>
          <li>
            <a href="https://github.com/GilbDavis" rel="noopener noreferrer" target="_blank">
              <img src={DavisImg} alt="davis-profile-pic" />
            </a>
            <blockquote>
              Estudiante de Licenciatura en Desarrollo de Software
            </blockquote>
          </li>
          <li>
            <a href="http://www.investigadores.utp.ac.pa/investigadores/jose.mendoza" rel="noopener noreferrer" target="_blank">
              <img src={MendozaImg} alt="mendoza-profile-pic" />
            </a>
            <blockquote>
              Tutor en el Desarrollo de Tésis
            </blockquote>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Responsible;