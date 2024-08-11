import React, {useState, useEffect} from "react";

const UpdateTag=({tagId}) => {
    const[tagData, setTagData]= useState(null);
    useEffect(() => {
        const fetchTagData = async() => {
            try{
                const response = await fetch('./api/tags/${tagId}');
                const data= {
                    id: 1,
                    tag:'Trabajo',
                    task:'Hacer Informe',
                };
                setTagData(data);
            }catch(error){
                console.error('Error al obtener los datos de la etiqueta', error)
            }
        };
        fetchTagData();
    }, [tagId]);
    return(
        <div>
      {/* Renderiza el formulario de actualización */}
        </div>
    );
};
export default UpdateTag;