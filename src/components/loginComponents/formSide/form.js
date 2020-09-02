import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../../alert/alert';
import styles from './form.module.scss';

const form = ({ handleOnSubmit, handleOnChange, alertMessage, emailValue, passwordValue, rememberValue }) => {

  return (
    <div className={styles.Container}>
      <div className={styles.FormContainer}>
        <h4 className={styles.Header}>Internet de las cosas! Impulsando el futuro de la UTP.</h4>
        <p className={styles.Paragraph}>Bienvenido de nuevo, Inicie sesión en su cuenta.</p>
        {alertMessage ? <Alert alert={alertMessage} /> : null}
        <form className={styles.Form + ' center-align'} onSubmit={event => handleOnSubmit(event)}>
          <div className="input-field col s12  l6">
            <input id="email"
              name="email"
              type="email"
              className="validate"
              onChange={event => handleOnChange(event)}
              value={emailValue}
            />
            <label htmlFor="email">Correo Eletrónico</label>
            <span className="helper-text" data-error="Ingrese un correo valido"></span>
          </div>
          <div className="input-field col s12  l6">
            <input id="password"
              name="password"
              type="password"
              className="validate"
              value={passwordValue}
              onChange={event => handleOnChange(event)}
            />
            <label htmlFor="password">Contraseña</label>
            <span className="helper-text" data-error="Contrasena corta"></span>
          </div>
          <button className="btn waves-effect waves-light"
            type="submit"
            name="action">
            Iniciar Sesión
          </button>
        </form>

        <Link to={"register"} className={styles.Register_Link}>
          No tienes una cuenta aún? Registrate aqui.
        </Link>
      </div>
    </div>
  );
};

export default form;