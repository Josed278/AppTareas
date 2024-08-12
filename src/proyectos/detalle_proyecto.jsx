// src/proyectos/detalle_proyecto.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetalleProyecto = ({ id }) => {
  const [proyecto, setProyecto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await axios.get(`/taskmanager/projects/${id}/`);
        setProyecto(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProyecto();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!proyecto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del Proyecto</h1>
      <p><strong>ID:</strong> {proyecto.id}</p>
      <p><strong>Fecha de creación:</strong> {proyecto.created_at}</p>
      <p><strong>Fecha de actualización:</strong> {proyecto.updated_at}</p>
      <p><strong>Nombre:</strong> {proyecto.name}</p>
      <p><strong>Descripción:</strong> {proyecto.description}</p>
      <p><strong>Propietario del proyecto:</strong> {proyecto.owner}</p>
      <h2>Miembros</h2>
      <ul>
        {proyecto.members.map((miembro, index) => (
          <li key={index}>{miembro}</li>
        ))}
      </ul>
    </div>
  );
};

export default DetalleProyecto;
