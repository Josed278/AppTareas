import { useEffect, useState } from "react";

const TaskAttachmentDetails= ({attachmentId}) => {
    const[attachmentDetails, setAttacmentDetails]= useState(null);

    useEffect(() => {
        const fetchAttachmentsDetails= async() => {
            try{
                const response = await
fetch('/https://sandbox.academiadevelopers.com/docs/'/attachments/$,{attachmentId});
            if(response.ok) {
                const data= await response.json();
                setAttacmentDetails(data);
            } else {
                console.error('Error fetching attachment details');
            }           
            }catch (error){
                console.error('Error fetching attachment details', error);
        }
    }
    
        fetchAttachmentsDetails();
        }, [attachmentId]);
        if(!attachmentDetails) {
            return <p>Cargando detalles del Adjunto...</p>;
        }
        return(
            <div>
                <h2>Dettalles del Adjunto</h2>
                <p>Id: {attachmentDetails}</p>
            </div>
        )
    };
    export default TaskAttachmentDetails;
