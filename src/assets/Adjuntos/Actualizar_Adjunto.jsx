import { useState } from "react";


const UpdateAttachment= ({attachmentId}) => {
    const UpdateAttachment=({attachmentId}) => {
        const[updatedData, setUpdatedData]= useState({
            task: 123,
            attachment:attachmentId,
    });

const handleUpdate=async()=> {
        try{
            const response=await fetch('/api/attachments/$ {attachmentId}',
        {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',            
            },
            body: JSON.stringify(updatedData),
        });
        if(response.ok){
            console.log('Adjunto actualizado correctamente');
        }else{
            console.error('Error al actualizar el adjunto');
        }
        }catch(error){
            console.error('Error al actualizar el adjunto', error);
        }
    };
    return(
        <div>
      {/* Renderiza un formulario para editar los datos */}
      {/* Agrega un botón para llamar a handleUpdate */}
   
        </div>
    )
    };
    };

    export default UpdateAttachment;
