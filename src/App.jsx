import React, { useState } from 'react';
import EliminarAdjunto from './adjuntos/eliminar_adjunto';
import ListadoProyecto from './proyectos/listado_proyecto';
import NuevoProyecto from './proyectos/nuevo_proyecto';
import DetalleProyecto from './proyectos/detalle_proyecto';
import ActualizarProyecto from './proyectos/actualizar_proyecto';
import ActualizarParcProyecto from './proyectos/actualizar_parc_proyecto';
import EliminarProyecto from './proyectos/eliminar_proyecto';

const App = () => {
  const [adjuntoId, setAdjuntoId] = useState(1);

  const handleDeleteSuccess = () => {
    console.log('Adjunto eliminado exitosamente');
    // Aquí puedes actualizar el estado o realizar otras acciones necesarias
  };

  return (
    <div>
      <EliminarAdjunto id={adjuntoId} onDeleteSuccess={handleDeleteSuccess} />
      <ListadoProyecto />
      <NuevoProyecto onCreateSuccess={handleCreateSuccess} />

      <h1>Aplicación de Gestión de Proyectos</h1>
      <DetalleProyecto id={proyectoId} />
      <h1>Aplicación de Gestión de Proyectos</h1>
      <ActualizarProyecto id={proyectoId} />
      <h1>Aplicación de Gestión de Proyectos</h1>
      <ActualizarParcProyecto id={proyectoId} />

      <Route path="/eliminar-proyecto/:id" component={EliminarProyecto} />
    
    </div>
   
  );
};

export default App;
