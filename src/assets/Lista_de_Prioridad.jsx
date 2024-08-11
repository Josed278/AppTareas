import React from "react";
import Datos from "./Datos";

const Lista_de_Prioridad= () =>{
    return(
        <div>
        {Datos.results.maps(Prioridad => {
            <div key={Prioridad.id}>
            <h3>{Prioridad.level}</h3>
            <p>{Prioridad.description}</p>
            <p>Owner: {Prioridad.owner}</p>
            <p>created_at:{Prioridad.created_at}</p>
            <p>updated_at:{Prioridad.updated_at}</p>
        </div>
         } )}

        </div>
    )
        
    };

export default Lista_de_Prioridad;