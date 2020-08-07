import React, { Fragment } from 'react';
import styles from './sideImage.module.scss';

const sideImage = ({ image, imageAlt }) => {

  return (
    <Fragment>
      <div className={styles.SideImage_Container}>
        <img className={styles.SideImage} src={image} alt={imageAlt} />
      </div>
    </Fragment>
  );
};

export default sideImage;