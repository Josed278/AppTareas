import React from 'react';
import axios from 'axios';

const EliminarAdjunto = ({ id, onDeleteSuccess }) => {
  const eliminarAdjunto = async () => {
    try {
      const response = await axios.delete(`/taskmanager/attachments/${id}/`);
      if (response.status === 204) {
        onDeleteSuccess();
      }
    } catch (error) {
      console.error('Error eliminando el adjunto:', error);
    }
  };

  return (
    <button onClick={eliminarAdjunto}>
      Eliminar Adjunto
    </button>
  );
};

export default EliminarAdjunto;
