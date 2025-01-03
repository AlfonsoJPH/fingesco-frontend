import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecursosList = () => {
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/recursos`, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
      .then(response => {
        setRecursos(response.data);
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
      <h2>Recursos</h2>
      <ul>
        {recursos.map(recurso => (
          <li key={recurso.id}>{recurso.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecursosList;