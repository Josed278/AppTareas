import React, { useState } from 'react';
import axios from 'axios';

const Añadir_Miembros = () => {
  const [project, setProject] = useState('');
  const [user, setUser] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('URL_DE_TU_API', {
        project: project,
        user: user,
      });
      if (response.status === 201) {
        setMensaje('Miembro añadido exitosamente');
      }
    } catch (error) {
      console.error('Error al añadir el miembro:', error);
      setMensaje('Error al añadir el miembro');
    }
  };

  return (
    <div>
      <h1>Añadir Miembros</h1>
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
        <div>
          <label>Usuario:</label>
          <input
            type="number"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>
        <button type="submit">Añadir Miembro</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Añadir_Miembros;