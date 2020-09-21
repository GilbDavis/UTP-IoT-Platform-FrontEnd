import React from 'react';
import { Link } from 'react-router-dom';
import styles from './form.module.scss';
import reactGa from 'react-ga';

import Select from '../select/select';
import Alert from '../../alert/alert';

const Form = ({ handleOnChange, handleOnSubmit, formValues, alertMessage, defaultRegions }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.FormContainer}>
        <h4 className={styles.Header}>Internet de las cosas! Impulsando el futuro de la UTP.</h4>
        <p className={styles.Paragraph}>Bienvenido a la plataforma! Proceda con la creación de su cuenta.</p>
        {alertMessage ? <Alert alert={alertMessage} /> : null}
        <form className={styles.Form + ' center-align'} onSubmit={event => handleOnSubmit(event)}>
          <div className="input-field col s6">
            <input
              id="name"
              name="name"
              type="text"
              className="validate"
              onChange={event => handleOnChange(event)}
              value={formValues.name}
            />
            <label htmlFor="name">Nombre</label>
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="validate"
              onChange={event => handleOnChange(event)}
              value={formValues.lastName}
            />
            <label htmlFor="lastName">Apellido</label>
          </div>
          <Select
            selectValue={formValues.regional_center}
            handleOnChange={handleOnChange}
            defaultRegions={defaultRegions}
          />
          <div className="input-field col s6">
            <input
              id="email"
              name="email"
              type="email"
              className="validate"
              onChange={event => handleOnChange(event)}
              value={formValues.email}
            />
            <label htmlFor="email">Correo Eletrónico</label>
          </div>
          <div className="input-field col s6">
            <input
              id="password"
              name="password"
              type="password"
              className="validate"
              value={formValues.password}
              onChange={event => handleOnChange(event)}
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="input-field col s6">
            <input
              id="confirm"
              name="confirm"
              type="password"
              className="validate"
              value={formValues.confirm}
              onChange={event => handleOnChange(event)}
            />
            <label htmlFor="confirm">Confirme su contraseña</label>
          </div>
          <button className="btn waves-effect waves-light"
            style={{ marginTop: '2em' }}
            type="submit"
            name="action">
            Crear Cuenta
        </button>
        </form>

        <Link onClick={() => reactGa.event({ category: 'LoginRedirectionButton', action: 'Redirected the user to login page' })} to={"/login"} className={styles.Login_Link}>
          Ya tienes una cuenta? Inicia sesión aqui.
      </Link>
      </div>
    </div>
  );
};

export default Form;