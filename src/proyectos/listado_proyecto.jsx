import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoProyecto = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await axios.get('/taskmanager/projects/');
        setProyectos(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p>Error al cargar proyectos: {error.message}</p>;

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <h2>{proyecto.name}</h2>
            <p>{proyecto.description}</p>
            <p>Creado el: {new Date(proyecto.created_at).toLocaleDateString()}</p>
            <p>Actualizado el: {new Date(proyecto.updated_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyecto;
