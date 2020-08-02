import React from 'react';
import styles from './Characteristics.module.scss';

import analiticsImg from '../../../assets/analitics.svg';
import responsiveImg from '../../../assets/responsive.svg';
import intuitiveImg from '../../../assets/intuitiveui.svg';

const Characteristics = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Characteristics_Container}>
        <h2>Características</h2>
        <ul className={styles.Characteristics_list}>
          <li>
            <img src={analiticsImg} alt="analitic-image" />
            <h4>Análisis en tiempo real</h4>
          </li>
          <li>
            <img src={responsiveImg} alt="Responsive-image" />
            <h4>Diseño adaptable a cualquier dispositivo</h4>
          </li>
          <li>
            <img src={intuitiveImg} alt="intuitive-image" />
            <h4>Interfaz intuitiva y fácil navegación</h4>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Characteristics;