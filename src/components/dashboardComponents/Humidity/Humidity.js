import React from 'react';
import { Line } from 'react-chartjs-2';

const Humidity = ({ screenSize, labels, humidity }) => {

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Humedad',
        data: humidity,
        fill: false,          // Don't fill area under the line
        borderColor: 'blue'  // Line color
      }
    ]
  };

  return (
    <div className={`col ${screenSize}`}>
      <div className="card">
        <div className="card-content">
          <h4 className="card-title">Humedad del Centro de datos</h4>
          <p className="caption">Humedad en porcentaje</p>
        </div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Humidity;