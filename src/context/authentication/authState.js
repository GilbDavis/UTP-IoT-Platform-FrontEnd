import React, { useReducer } from 'react';
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "../../config/axios";
import authToken from "../../config/authToken";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from "../../types/index";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async datos => {
    try {
      const respuesta = await axios.post("/api/usuarios/register", datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data.data
      });
      usuarioAutenticado()
    } catch (error) {
      const alerta = {
        msg: error.response.data.errors[0].msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      });
    }
  };

  // Retornar el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      authToken(token);
    }

    try {
      const respuesta = await axios.get("/api/user");
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.data.usuario
      })
    } catch (error) {
      const alerta = {
        msg: error.response.data.errors.message,
        categoria: "alerta-error"
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      });
    }
  };

  // Al iniciar sesion
  const iniciarSesion = async datos => {
    try {
      const respuesta = await axios.post("/api/user/login", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data
      });
      usuarioAutenticado();
    } catch (error) {
      const alerta = {
        msg: error.response.data.errors.message,
        categoria: "alerta-error"
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      });
    }
  }

  // Cierra la sesion del usuario
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION
    });
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;
