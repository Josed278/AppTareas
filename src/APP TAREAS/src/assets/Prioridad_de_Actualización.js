import { useState } from "react";
import axios from "axios";
import Prioridad from "./Priridad";

const Prioridad_de_Actualizacion=({id}) => {
const [level, setlevel]= useState('');
const [description, setdescription]= useState('');

const Manejar_Actualizacion = async () => {
    try{
        const Respuesta = await
        axios.put(/taskmanager/priorities/$,{id}, {
            level, 
            description,
        });
        console.log('Prioridad_Acualizada;', Respuesta.data);
    }catch(error){
        console.error('Error actualizando prioridad', error);
    }}
};

return{
    <div>
    <><h2>Prioridad_de_Actualizacion</h2><form onSubmit={e} {...e.preventDefault()} Manejar_Actualizacion /></>();}}>
    <><div>
            <label>nivel</label>
            <input
                type="text"
                value={level}
                onChange={(e) => setlevel(e.target.value) /}
                maxLength="50"
                minLength={1}
                required />
        </div><div>
                <label>Descripcion</label>
                <texttarea
                    value />(description)
                    onChange={(e) => setdescription(e.target.value)}
                /</div>
                <button type="submit">Actualizar</button>
            <form/>

    </div>
};
};
export default Prioridad_de_Actualizacion;