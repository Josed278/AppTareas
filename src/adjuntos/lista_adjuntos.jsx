import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaAdjuntos = () => {
  const [attachments, setAttachments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await axios.get('https://sandbox.academiadevelopers.com/taskmanager/attachments/', {
          headers: {
            'accept': 'application/json',
            'X-CSRFToken': '9wYLTPYGKINZOMQgehihDGkPfqwf7PhEinbPdaG7gYQ4XAKRGUQM4s1TLvKK0nEC'
          }
        });
        setAttachments(response.data);
      } catch (error) {
        setError(error.response ? error.response.data.detail : 'Error fetching data');
      }
    };

    fetchAttachments();
  }, []);

  return (
    <div>
      <h1>Lista de Archivos Adjuntos</h1>
      {error && <p>{error}</p>}
      <ul>
        {attachments.map((attachment) => (
          <li key={attachment.id}>{attachment.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAdjuntos;
