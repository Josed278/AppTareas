import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetallesAdjunto = ({ id }) => {
  const [adjunto, setAdjunto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdjunto = async () => {
      try {
        const response = await axios.get(`/taskmanager/attachments/${id}/`);
        setAdjunto(response.data);
      } catch (err) {
        setError('Error al cargar los detalles del adjunto.');
      }
    };

    fetchAdjunto();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!adjunto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Adjunto</h2>
      <p><strong>ID:</strong> {adjunto.id}</p>
      <p><strong>Fecha de creación:</strong> {adjunto.created_at}</p>
      <p><strong>Fecha de actualización:</strong> {adjunto.updated_at}</p>
      <p><strong>Nombre:</strong> {adjunto.name}</p>
      <p><strong>Archivo:</strong> <a href={adjunto.file} target="_blank" rel="noopener noreferrer">Descargar</a></p>
      <p><strong>Subido por:</strong> {adjunto.uploaded_by}</p>
      <p><strong>Tareas:</strong> {adjunto.tasks.join(', ')}</p>
    </div>
  );
};

export default detallesAdjunto;
