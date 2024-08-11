import React from "react";

const DeleteAttachment = ({attachmentId}) => {
    const handleDelete = async () => {
        try{
            const response = await fetch('/api/attachments/$ {attachmentId}',
    {
             method:'DELETE',
            });
            if(response.status===204) {
                console.log('Adjunto eliminado correctamente');
            }else{
                console.error('Error al eliminar el adjunto');
            }
        }catch(error){
            console.error('Error al eliminar el adjunto', error);
        }
    };
    return (
        <div>
            <button onClick={handleDelete}>Eliminar un Adjunto</button>
        </div>
    );
};
export default DeleteAttachment;