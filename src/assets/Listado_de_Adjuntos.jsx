import { useEffect, useState } from "react";
import axios from "axios";

const TaskAttachments=() => {
    const[attachments, setAttacments]= useState([]);
    const[loading, setLoading]= useState(true);
    const[error, setError]= useState(null);

          useEffect(() =>{
            const fetchAttachments = async () => {
                try{
                    const response  = axios.get('https://sandbox.academiadevelopers.com/taskmanager/task-attachments/',{
                        params: {
                            page: 1,
                            page_size: 10,
                            ordering: '-Created_at'
                        }
                    } );
                    setAttacments(response.data.results);
                }catch (err){
                    setError(err);
                }finally{
                    setLoading(false);
                }
            };
            fetchAttachments();
          }, []);

          if (loading) return <p>Cargando...</p>;
          if(error) return <p>Error:{error.message} </p>;
          
          return (
            <div>
                <h1>Adjunto de Tareas</h1>
                <ul>
                    {attachments.map((attachments) => (
                        <li key={attachments.id}>
                            <p>Tarea: {attachments.task}</p>
                            <p>Adjunto: {attachments.attachment}</p>
                            <p>Fecha de Creacion: {attachments.created_at}</p>
                            <p>Fecha de Acualizacion: {attachments.updates_at}</p>
                            </li>
                    ))}
                </ul>
            </div>
          );
};
export default TaskAttachments;



