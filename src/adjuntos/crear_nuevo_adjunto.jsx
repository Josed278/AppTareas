import React, { useState } from 'react';
import axios from 'axios';

const CrearNuevoAdjunto = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://sandbox.academiadevelopers.com/taskmanager/attachments/', 
        { name },
        {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': 'bvCOyjyrrMfCF13Jstz6RmgT9U6cHa2EkmPSSEgSX2iHOPXkU67Bi8XXFZkHAIpC'
          }
        }
      );
      setResponse(res.data);
    } catch (error) {
      setError(error.response ? error.response.data.detail : 'Error creating attachment');
    }
  };

  return (
    <div>
      <h1>Crear Nuevo Adjunto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <button type="submit">Crear</button>
      </form>
      {response && <p>Adjunto creado con éxito: {JSON.stringify(response)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CrearNuevoAdjunto;
