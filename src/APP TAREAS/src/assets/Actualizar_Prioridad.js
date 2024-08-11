import { useState } from "react";


const Actualizar_Prioridad=({id}) => {
const [level, setlevel]= useState('');
const [description, setdescription]= useState('');
const [projects, setProjects]= useState('')

const handleSubmit = async () => {
    e.preventDefault();   
        const response = await fetch {'/api/priorities/$,{id}', {
            method:'PUT',
            method:'PATCH'
            headers: {
                'Content-Type':'application/json', 
            },
            body JSON.stringify({level, description, projects}),
            
        };
        if(response.ok){
            alert('Prioridad actualizada con exito');
        }else{
            alert('Error al actualizar la prioridad')
        }
        };
        return{
            <div>
            <><h2>Actualizar_Prioridad</h2><input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setdescription(e.target.value)}/>
                <input
                type="text"
                placeholder="Nivel"
                value={level}
                onChange={(e) => setlevel(e.target.value)}
                />
                Proyectos:
                        <input
                        type="text"
                        value={projects}
                        onChange={(e) => setProjects(e.target.value.split('.'))}/>
                        
                        <button onClick={handleUpdate}>Actualizar</button>
            </div>
        }
        return {
            <form onSubmit={handleSubmit}>
            <><label>
                    Nivel:
                    <input
                        type="text"
                        value={level}
                        onChange={(e) => setlevel(e.target.value) /}
                        maxLength="50"
                        minLength={1}
                        required />
                </label><label>
                   Descripcion:
                   <input
                   type="text"
                   value={description}
                   onChange={(e) => setdescription(e.target.value)}/>
                    </label>
                    <label>
                        Proyectos:
                        <input
                        type="text"
                        value={projects}
                        onChange={(e) => setProjects(e.target.value)}/>
                        </label>
                        <button type="submit">Actualizar_Prioridad</button>
                        <form/>
        };

        };
        export default Actualizar_Prioridad;
      
           