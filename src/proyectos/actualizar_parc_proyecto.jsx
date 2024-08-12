// src/proyectos/actualizar_parc_proyecto.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ActualizarParcProyecto = ({ id }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.patch(`/taskmanager/projects/${id}/`, {
        name,
        description,
      });
      setSuccess('Proyecto actualizado parcialmente con éxito');
      setError(null);
    } catch (err) {
      setError('Error al actualizar el proyecto');
      setSuccess(null);
    }
  };

  return (
    <div>
      <h1>Actualizar Parcialmente Proyecto</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            minLength={1}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default ActualizarParcProyecto;
