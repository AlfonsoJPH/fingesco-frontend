import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

const RecursosList = () => {
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Endpoint URL:', config.endpointURL);
    console.log('API Key:', config.apiKey);

    axios.get(`${config.endpointURL}/recursos`, {
      headers: {
        'x-api-key': config.apiKey
      }
    })
      .then(response => {
        console.log('API Response:', response.data);
        if (response.data && Array.isArray(response.data.topics)) {
          setRecursos(response.data.topics);
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

  if (recursos.length === 0) return null;

  return (
    <div>
      <h2>Recursos</h2>
      <ul>
        {recursos.map(recurso => (
          <li key={recurso}>{recurso}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecursosList;