import React from "react";
import Datos from "./Datos";

const Prioridad = () => {
  return (
    <div>
      <h3>{Datos.level}</h3>
      <p>{Datos.description}</p>
      <ul>
        {Datos.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Prioridad;

  