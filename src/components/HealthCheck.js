import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

const HealthCheck = () => {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    axios.get(`${config.endpointURL}/health`)
      .then(response => {
        setStatus(response.data.status);
      })
      .catch(error => {
        setStatus("DOWN");
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