import React, { Fragment } from 'react';
import styles from './sideImage.module.scss';
import iotBackground from '../../../assets/iot-background.jpg';

const sideImage = () => {

  return (
    <Fragment>
      <div className={styles.SideImage_Container}>
        <img className={styles.SideImage} src={iotBackground} alt="Background-iot" />
      </div>
    </Fragment>
  );
};

export default sideImage;