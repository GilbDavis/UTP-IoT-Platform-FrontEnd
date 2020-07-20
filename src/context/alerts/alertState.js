import React, { useReducer } from 'react'
import AlertReducer from "./alertReducer";
import AlertContext from "./alertContext";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types/index";

const AlertState = props => {
  const initialState = {
    alerta: null
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // handlers
  const mostrarAlerta = (msg, categoria) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        msg,
        categoria
      }
    });
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      });
    }, 5000);
  }

  return (
    <AlertContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;