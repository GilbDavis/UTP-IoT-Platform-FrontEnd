import React from 'react';
import { Link } from 'react-router-dom';
import styles from './form.module.scss';

const form = ({ handleOnSubmit, handleOnChange, alertMessage }) => {

  return (
    <div className={styles.Container}>
      <div className={styles.FormContainer}>
        <h4 className={styles.Header}>Internet de las cosas! Impulsando el futuro de la UTP.</h4>
        <p className={styles.Paragraph}>Bienvenido de nuevo, Inicie sesión en su cuenta.</p>
        <form className={styles.Form + ' center-align'} onSubmit={e => e.preventDefault()}>
          <div className="input-field col s12  l6">
            <input id="name" name="name" type="email" className="validate" />
            <label htmlFor="name">Correo Eletrónico</label>
            <span className="helper-text" data-error="Ingrese un correo valido"></span>
          </div>
          <div className="input-field col s12  l6">
            <input id="password" name="password" type="password" className="validate" />
            <label htmlFor="name">Contraseña</label>
            <span className="helper-text" data-error="Contrasena corta"></span>
          </div>
          <div className="left-align">
            <label>
              <input id="indeterminate-checkbox"
                name="centro_regional"
                type="checkbox" />
              <span>Recuerdame</span>
            </label>
          </div>
          <button className="btn waves-effect waves-light"
            style={{ marginTop: '2em' }}
            type="submit"
            name="action">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default form;