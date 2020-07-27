import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import Temperatures from '../../../components/dashboardComponents/Temperature/Temperature';
import Humidity from '../../../components/dashboardComponents/Humidity/Humidity';
import ChartContainer from '../../../components/dashboardComponents/ChartContainer/ChartContainer';

const DataCenter = () => {

  const [sensorData, setSensorData] = useState({
    dataCenter: {
      labels: [],
      temperature: [],
      humidity: []
    }
  });

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_BACKEND_URL);
    socket.on("DataCenter/room/realTime", data => {
      console.log(data);
      return setSensorData(prevSensorData => ({
        dataCenter: {
          labels: [...prevSensorData.dataCenter.labels, data.createdAt],
          temperature: [...prevSensorData.dataCenter.temperature, data.temperature],
          humidity: [...prevSensorData.dataCenter.humidity, data.humidity]
        }
      }));
    });

    return () => socket.disconnect();
  }, []);

  return (
    <ChartContainer>
      <Temperatures labels={sensorData.dataCenter.labels}
        temperatures={sensorData.dataCenter.temperature}
        screenSize="s12 l6"
        location="Centro de Datos"
      />
      <Humidity labels={sensorData.dataCenter.labels}
        humidity={sensorData.dataCenter.humidity}
        screenSize="s12 l6"
        location="Centro de Datos"
      />
    </ChartContainer>
  );
};

export default DataCenter;