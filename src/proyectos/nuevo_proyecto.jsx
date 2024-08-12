import React, { useState } from 'react';
import axios from 'axios';

const NuevoProyecto = ({ onCreateSuccess }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/taskmanager/projects/', {
        name,
        description,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': 'bvCOyjyrrMfCF13Jstz6RmgT9U6cHa2EkmPSSEgSX2iHOPXkU67Bi8XXFZkHAIpC', // Asegúrate de obtener el token CSRF correcto
        },
      });
      if (response.status === 201) {
        onCreateSuccess();
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Proyecto:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      {error && <p>Error al crear el proyecto: {error.message}</p>}
      <button type="submit">Crear Proyecto</button>
    </form>
  );
};

export default NuevoProyecto;
