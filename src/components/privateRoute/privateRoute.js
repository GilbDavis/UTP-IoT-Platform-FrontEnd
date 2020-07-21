import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../../context/authentication/authContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...props }) => {

  const authContext = useContext(AuthContext);
  const { cargando, autenticado, usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();

    // eslint-disable-next-line
  }, []);

  return (
    <Route {...props} render={props => !autenticado && !cargando ? (
      <Redirect to="/" />
    ) : (
        <Component {...props} />
      )} />
  );
};

export default PrivateRoute;