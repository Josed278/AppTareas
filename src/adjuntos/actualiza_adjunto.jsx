import React, { useState } from 'react';
import axios from 'axios';

const ActualizaAdjunto = ({ id }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`/taskmanager/attachments/${id}/`, { name });
      setMessage('Adjunto actualizado exitosamente.');
    } catch (error) {
      setMessage('Error al actualizar el adjunto.');
    }
  };

  return (
    <div>
      <h2>Actualizar Adjunto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength="255"
            required
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ActualizaAdjunto;
