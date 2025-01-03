import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SensoresList = () => {
  const [sensores, setSensores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/sensores`, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
      .then(response => {
        setSensores(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Sensores</h2>
      <ul>
        {sensores.map(sensor => (
          <li key={sensor.id}>{sensor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SensoresList;