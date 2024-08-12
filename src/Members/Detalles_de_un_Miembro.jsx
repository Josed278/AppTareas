import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detalles_De_Miembro = ({ id }) => {
  const [miembro, setMiembro] = useState(null);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchMiembro = async () => {
      try {
        const response = await axios.get(`URL_DE_TU_API/${id}`);
        setMiembro(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del miembro:', error);
        setMensaje('Error al obtener los detalles del miembro');
      }
    };

    fetchMiembro();
  }, [id]);

  if (!miembro) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Detalles del Miembro</h1>
      <p>ID: {miembro.id}</p>
      <p>Proyecto: {miembro.project}</p>
      <p>Usuario: {miembro.user}</p>
      <p>Fecha de Creación: {miembro.created_at}</p>
      <p>Fecha de Actualización: {miembro.updated_at}</p>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Detalles_De_Miembro;