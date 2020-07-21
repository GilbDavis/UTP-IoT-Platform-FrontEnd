import React from 'react';
import './alert.scss';

const Alert = ({ alert }) => {
  return (
    <div className={`alerta ${alert.categoria}`}>
      {alert.msg}
    </div>
  );
};

export default Alert;