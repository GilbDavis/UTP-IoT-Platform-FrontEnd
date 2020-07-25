import React from 'react';
import { Line } from 'react-chartjs-2';

const Temperature = ({ screenSize, labels, temperatures }) => {

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Temperatura',
        data: temperatures,
        fill: false,          // Don't fill area under the line
        borderColor: 'red'  // Line color
      }
    ]
  };

  return (
    <div className={`col ${screenSize}`}>
      <div className="card">
        <div className="card-content">
          <h4 className="card-title">Temperatura del Centro de datos</h4>
          <p className="caption">Temperatura en grados centigrados</p>
        </div>
        <Line data={data}/>
      </div>
    </div>
  );
};

export default Temperature;