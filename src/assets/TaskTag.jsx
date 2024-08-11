import React from "react";

const TaskTag=({tag, task}) =>{
    
    return(
        <div>
            <span>Etiqueta: {tag}</span>
            <span>Tareas: {task}</span>
        </div>
    );
};
export default TaskTag;