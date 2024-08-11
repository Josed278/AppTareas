import React, {useState} from "react";
import axios from "axios";

const CreateTaskTag = () => {
    const[tagName, setTagName]= useState('');

    const handleCreateTag= async() =>{
        try{
            const token = localStorage.getItem('token');
            const response = await axios.post(
                './api/task-tags',
                {tagName},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Etiqueta Creada:', response.data)
        }catch(error){
            console.error('Error al crear la etiqueta: ', error)
        }
    };
    return(
        <div>
            <input
            type="Text"
            placeholder="Nombre de la etiqueta"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            />
            <button onClick={handleCreateTag}>Crear Etiqueta</button>
              </div>
    );
};

export default CreateTaskTag;
