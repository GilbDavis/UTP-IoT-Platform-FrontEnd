import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import Temperatures from '../../../components/dashboardComponents/Temperature/Temperature';
import ChartContainer from '../../../components/dashboardComponents/ChartContainer/ChartContainer';

const Lems = () => {

  const [lemsData, setLemsData] = useState({
    lems: {
      labels: [],
      temperature: []
    }
  });

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_BACKEND_URL);
    socket.once("LEMS/tina/realTime", data => {
      return setLemsData(prevSensorData => ({
        lems: {
          labels: [...prevSensorData.lems.labels, data.createdAt],
          temperature: [...prevSensorData.lems.temperature, data.temperature]
        }
      }));
    });

    return () => socket.close();
  }, [lemsData]);

  return (
    <ChartContainer>
      <Temperatures screenSize="s12 l12"
        labels={lemsData.lems.labels}
        temperatures={lemsData.lems.temperature}
      />
    </ChartContainer>
  );
};

export default Lems;