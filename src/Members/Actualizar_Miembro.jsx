import React, { useState } from 'react';
import axios from 'axios';

const ActualizarMiembro = ({ id }) => {
  const [project, setProject] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`URL_DE_TU_API/${id}`, {
        project: project,
      });
      if (response.status === 200) {
        setMensaje('Miembro actualizado exitosamente');
      }
    } catch (error) {
      console.error('Error al actualizar el miembro:', error);
      setMensaje('Error al actualizar el miembro');
    }
  };

  return (
    <div>
      <h1>Actualizar Miembro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Proyecto:</label>
          <input
            type="number"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
          />
        </div>
        <button type="submit">Actualizar Miembro</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default ActualizarMiembro;