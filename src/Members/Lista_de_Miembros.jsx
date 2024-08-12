import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lista_De_Miembros = () => {
  const [miembros, setMiembros] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchMiembros = async () => {
      try {
        const response = await axios.get('URL_DE_TU_API', {
          params: {
            project: 'tu_proyecto',
            user: 'tu_usuario',
            created_at_min: 'fecha_inicio',
            created_at_max: 'fecha_fin',
            updated_at_min: 'fecha_actualizacion_inicio',
            updated_at_max: 'fecha_actualizacion_fin',
            ordering: 'created_at',
            page: page,
            page_size: pageSize,
          },
        });
        setMiembros(response.data.results);
      } catch (error) {
        console.error('Error al obtener los miembros:', error);
      }
    };

    fetchMiembros();
  }, [page, pageSize]);

  return (
    <div>
      <h1>Lista de Miembros</h1>
      <ul>
        {miembros.map((miembro) => (
          <li key={miembro.id}>
            {miembro.user} - {miembro.project}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={() => setPage(page + 1)}>
        Siguiente
      </button>
    </div>
  );
};

export default Lista_De_Miembros;