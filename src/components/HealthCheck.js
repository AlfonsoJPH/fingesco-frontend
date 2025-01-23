import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
axios.defaults.baseURL = 'http://192.168.1.133:3001';
const HealthCheck = () => {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    axios.get(`health`)
      .then(response => {
        setStatus(response.data["status"]);
      })
      .catch(error => {
        setStatus(config.endpointURL + ' ' + config.apiKey);
      });
  }, []);

  return (
    <div>
      <h2>Service Status</h2>
      <p>Status: {status}</p>
    </div>
  );
};

export default HealthCheck;