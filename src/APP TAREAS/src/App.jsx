import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Lista_de_Prioridad from './assets/Lista_de_Prioridad'
import Prioridad from './assets/Priridad'
import Prioridad_de_Actualizacion from './assets/Prioridad_de_actualización'
import Actualizar_Prioridad from './assets/Actualizar_Prioridad'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
          </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      o	function App() {
o	  return (

         <div className='App'>
         <h1>Actualizar Prioridad</h1>
         <UpdatePriority id={1}/>
        <h1>Task Manager</h1>
        <Prioridad_de_Actualizacion id={1}/> {/* Reemplaza 1 con el id de la prioridad que deseas actualizar*/}
        
        <Lista_de_Prioridad/> <Prioridad/>
    </div>
};

      
  




export default App;
