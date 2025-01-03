import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthCheck = () => {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/health`)
      .then(response => {
        setStatus(response.data.status);
      })
      .catch(error => {
        setStatus('DOWN');
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