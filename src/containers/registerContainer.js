import React, { useState, useContext, useEffect } from 'react';
import SideImage from '../components/loginComponents/sideImage/sideImage';
import styles from './registerContainer.module.scss';
import Form from '../components/registerComponents/form/form';
import AlertContext from '../context/alerts/alertContext';
import AuthContext from '../context/authentication/authContext';

const RegisterContainer = (props) => {

  const alertContext = useContext(AlertContext);
  const { alerta, mostrarAlerta } = alertContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  useEffect(() => {
    if (autenticado) { // If the user is already authenticated redirect him to the dashboard
      props.history.push("/dashboard/datacenter");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    regional_center: "",
    email: "",
    password: "",
    confirm: ""
  });

  const defaultRegions = [
    'UTP-Bocas del Toro', 'UTP-Veraguas', 'UTP-Chiriquí', "UTP-Azuero", "UTP-Colón", "UTP-Coclé", "UTP-Panamá Oeste", "UTP-Panamá Tocumen", "UTP-Panamá Howard", "UTP-Panamá Campus"
  ];

  const { name, lastName, regional_center, email, password, confirm } = user; // Destructuring to get data

  const handleOnChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    // Validate data
    if (name.trim() === "" || lastName.trim() === ""
      || regional_center.trim() === "" || email.trim() === ""
      || password.trim() === "" || confirm.trim() === "") {
      return mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }
    // Validate password to be 8 character minimun
    if (password.length < 8) {
      return mostrarAlerta("La contraseña debe ser de al menos 8 caracteres", "alerta-error");
    }
    // Validate if the password is equal to confirm password
    if (password !== confirm) {
      return mostrarAlerta("Las contraseñas no coinciden, verifique y vuelta a intentar", "alerta-error");
    }
    // Pass data to registerHandler
    registrarUsuario({
      name,
      lastName,
      regional_center,
      email,
      password
    });
  };

  return (
    <div className={styles.register_Container}>
      <Form alertMessage={alerta}
        defaultRegions={defaultRegions}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        formValues={user}
      />
      <SideImage />
    </div>
  );
};

export default RegisterContainer;