import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

const SensoresList = () => {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Endpoint URL:', config.endpointURL);
    console.log('API Key:', config.apiKey);

    axios.get(`${config.endpointURL}/sensores`, {
      headers: {
        'x-api-key': config.apiKey
      }
    })
      .then(response => {
        console.log('API Response:', response.data);
        if (response.data && typeof response.data === 'object') {
          const sensoresArray = Object.entries(response.data).map(([id, data]) => ({ id, ...data }));
          setSensores(sensoresArray);
        } else {
          setError('Unexpected response format');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (sensores.length === 0) return null;

  return (
    <div>
      <h2>Sensores</h2>
      <ul>
        {sensores.map(sensor => (
          <li key={sensor.id}>
            {sensor.id}: Temperature: {sensor.temperature}, Humidity: {sensor.humidity}, Light: {sensor.light}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SensoresList;