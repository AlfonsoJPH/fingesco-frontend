import React from 'react';
import HealthCheck from './components/HealthCheck';
import RecursosList from './components/RecursosList';
import SensoresList from './components/SensoresList';

function App() {
  return (
    <div className="App">
      <h1>Fingesco Frontend</h1>
      <HealthCheck />
      <RecursosList />
      <SensoresList />
    </div>
  );
}

export default App;