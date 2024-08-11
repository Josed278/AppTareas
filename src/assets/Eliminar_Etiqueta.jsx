import React from "react";

const DeleteTag=({tagId}) => {

    const handleDelete = async() =>{
        try{
            await fetch('./api/tags/$ {tagId}', {method: 'DELETE'});
            console.log('Etiqueta eliminada correctamente');
            
        }catch(error){
            console.error('Error al eliminar la etiqueta', error);
        }
        };
        
        return(
            <div>
                <button onClick={handleDelete}>Eliminar Etiqueta</button>
            </div>
        );
    };
    export default DeleteTag;
