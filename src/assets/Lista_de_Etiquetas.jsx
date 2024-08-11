import { useEffect, useState } from "react";
const TagList= () => {
    const [tags, setTags]= useState ([]);

useEffect(() =>{
    const fetchTags= async() => {
        try{
            const response = await fetch ('./api/tags');
            const data=[
                {id : 1, tag:'Trabajo'},
                {id : 2, tag:'Personal'},
            ];
            setTags(data);
        }catch(error){
            console.error('Error al obtener las etiquetas: ', error);
        }
    };
    fetchTags();
    }, []);
    
    return(
        <div>
            <h2>Lista de Etiquetas</h2>
            <ul>
                {tags.map((tag) =>(
                    <li key={tag.id}>{tag.tag}</li>
                ) )}
            </ul>
        </div>
    );
};

export default TagList;
