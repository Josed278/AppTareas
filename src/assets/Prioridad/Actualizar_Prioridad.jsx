import { useState } from "react";


const Actualizar_Prioridad=({id}) => {
const [level, setlevel]= useState('');
const [description, setdescription]= useState('');
const [projects, setProjects]= useState('')
}
const handleSubmit = async (e) => {
    e.preventDefault();   
 const response = await fetch(`/api/priorities/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ level, description, projects }),
    });
    if (response.ok) {
      alert('Prioridad actualizada con éxito');
o	    } else {
     alert('Error al actualizar la prioridad');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nivel:
        <input
          type="text"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          maxLength="50"
          minLength="1"
          required
        />
      </label>
      <label>
        Descripción:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Proyectos:
        <input
          type="text"
          value={projects}
          onChange={(e) => setProjects(e.target.value.split(','))}
        />
      </label>
      <button type="submit">Actualizar Prioridad</button>
    </form>
  );


           