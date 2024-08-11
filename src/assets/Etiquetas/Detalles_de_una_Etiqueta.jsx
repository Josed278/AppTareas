import { useEffect, useState } from "react"

const TagDetails= ({tagId}) =>{
    const[tagDetails, setTagDetails]= useState(null);
    useEffect(()=> {
        const fetchTagDetails= async()=>{
            try{
                const response = await fetch('./api/tags/$ {tagId}');
                const data= {
                    id: 1,
                    tag: 'Trabajo',
                    task: 'Hacer Informe'
                };
                setTagDetails(data);
            }catch(error){
                console.error('Error al obtener los detalles de la etiqueta',error)
            }
        };
        fetchTagDetails();
    }, [tagId]);
    if(!tagDetails){
        return<div>Cargando detalles...</div>;
    }
    
    return(
        <div>
            <h2>Detalles de la Etiqueta:</h2>
            <p>Id: {tagDetails.tag}</p>
            <p>Etiqueta: {tagDetails.tag}</p>
            <p>Tarea: {tagDetails.task}</p>
        </div>
    );
};
export default TagDetails;