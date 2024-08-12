import React, { useState, useEffect } from 'react';

const Miembros = () => {
  const [miembros, setMiembros] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('https://api.ejemplo.com/miembros')
      .then(response => response.json())
      .then(data => {
        setMiembros(data);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Lista de Miembros</h1>
      <ul>
        {miembros.map(miembro => (
          <li key={miembro.id}>{miembro.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Miembros;