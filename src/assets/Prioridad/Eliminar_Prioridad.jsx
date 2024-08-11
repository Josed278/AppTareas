import { useState } from "react";
import Prioridad from "./Priridad";

const App=() => {
    const[prioridades, setPrioridades]= useState([
        {id:1, nombre:'Alta'},
        {id:2, nombre:'Media'},
        {id:3, nombre:'Baja'},
    ]);
    const Eliminar_Prioridad={id} =>{
        setPrioridades(prioridades.filter(Prioridad => Prioridad.id !==id))
    };
    return {
        <div>
        <><h1>Lista_de_Prioridad</h1><ul>
            (prioridades.maps(prioridad =&gt; {<li key={Prioridad.id}>
                {Prioridad.nombre}
                <button onClick {...() => Eliminar_Prioridad(Prioridad.id)}>Eliminar</button>
            </li>}))
        </ul>
        </div>
            };

    };
    export default App;
