import React, { useState, useContext, useEffect } from 'react';
import SideImage from '../components/loginComponents/sideImage/sideImage';
import styles from './loginContainer.module.scss';
import Form from '../components/loginComponents/formSide/form';
import AlertContext from '../context/alerts/alertContext';
import AuthContext from '../context/authentication/authContext';

const LoginContainer = (props) => {

  const alertContext = useContext(AlertContext);
  const { alerta, mostrarAlerta } = alertContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  useEffect(() => {
    if (autenticado) { // If the user is already authenticated redirect him to the dashboard
      props.history.push("/dashboard/datacenter");
    }

    if (mensaje) {
      return mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
    remember: false
  });
  const { email, password, remember } = user; // Destructuring to get data

  const handleOnChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
      remember: event.target.checked
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    // Validate data
    if (email.trim() === "" || password.trim() === "") {
      return mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }
    // Pass to login handler
    return iniciarSesion({ email, password });
  };

  return (
    <div className={styles.Login_Container}>
      <Form alertMessage={alerta}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        emailValue={email}
        passwordValue={password}
        rememberValue={remember}
      />
      <SideImage />
    </div>
  );
};

export default LoginContainer;