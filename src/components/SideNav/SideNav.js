import React from 'react';
import styles from "./SideNav.module.scss";
import { Link } from 'react-router-dom'
import Logo from '../../assets/iot.svg';

const SideNav = () => {

  return (
    <ul id="slide-out" className={`sidenav sidenav-fixed ${styles.SideNav_Container}`}>
      <li>
        <div className={styles.Title_Container}>
          <img className={styles.Logo} src={Logo} alt="Logo" />
          <h5 className={`brand-logo ${styles.Title}`}>Bocas IoT Monitoring</h5>
        </div>
      </li>

      <li><a className="subheader grey-text">Centro de Datos - UTP Bocas</a></li>
      <li><Link className="white-text" style={{ fontSize: '16px' }} to="/dashboard/datacenter">Temperatura & Humedad</Link></li>

      <li><a className="subheader grey-text">LEMS - UTP Bocas</a></li>
      <li><Link className="white-text" style={{ fontSize: '16px' }} to="/dashboard/lems">Tina/Temperatura</Link></li>
    </ul >
  );
};

export default SideNav;