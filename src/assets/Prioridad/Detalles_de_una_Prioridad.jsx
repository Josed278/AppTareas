//Este codigo devuelve detalles de una prioridad específica por su ID.
import { useState } from "react";
import axios from "axios";
import Prioridad from "../Prioidad";

const UpdatePriority = ({ id }) => {
  const [level, setLevel] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await 
      axios.put(`/taskmanager/Priorities/${id}/`, {
        description,

     });
      console.log('Priority updated:', response.data);
    } catch (error) {
      console.error('Error updating priority:', error);
   }
  };

  return (
    <div>
      <h2>Update Priority</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div>
          <label>Nivel:</label>
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            maxLength="50"
            minLength="1"
            required
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

export default UpdatePriority;



