import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EliminarProyecto = () => {
  const { id } = useParams();

  const eliminarProyecto = async () => {
    try {
      const response = await axios.delete(`/taskmanager/projects/${id}/`);
      if (response.status === 204) {
        alert('Proyecto eliminado exitosamente');
      }
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
      alert('Hubo un error al eliminar el proyecto. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Eliminar Proyecto</h2>
      <p>¿Estás seguro de que deseas eliminar este proyecto?</p>
      <button onClick={eliminarProyecto}>Eliminar</button>
    </div>
  );
};

export default EliminarProyecto;
