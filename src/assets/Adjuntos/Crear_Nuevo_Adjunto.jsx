import React, { useState } from "react";
import axios from "axios";

const CreateTaskAttachment = () => {
  const [task, setTask] = useState("");
  const [attachment, setAttachment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
     
      await axios.post("https://sandbox.academiadevelopers.com/taskmanager/task-attachments/", {
        task: task,
        attachment: attachment,
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Crear Adjunto de Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tarea</label>
          <input
            type="text" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Adjunto</label>
          <input
            type="text" 
            value={attachment}
            onChange={(e) => setAttachment(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creando..." : "Crear"}
        </button>
      </form>
      {error && <p>Error: {error}</p>}
      {success && <p>Adjunto creado exitosamente</p>}
    </div>
   );
 };

  export default CreateTaskAttachment;
        
        
              
                       


         


