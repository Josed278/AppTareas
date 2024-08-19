import { useState } from "react";
import Menu from "./components/menu"; // Verifica la ruta de importación
import Login from "./components/Login"; // Verifica la ruta de importación
import Card from "./components/Card"; // Verifica la ruta de importación
import Text from "./components/Text"; // Verifica la ruta de importación
import Perfil from "./components/Perfil"; // Verifica la ruta de importación
import NewCard from "./components/NewCard"; // Verifica la ruta de importación
import NewProyectos from "./components/NewProyectos"; // Verifica la ruta de importación
import Imagen from "./components/Imagen"; // Verifica la ruta de importación

function App() {
  return (
    <div>
      <Menu />
      <Card />
      <Perfil />
      <NewCard />
      <NewProyectos />
    </div>
  );
}

export default App;

{
  /* <Login />
<Card />
<Perfil />
<NewCard />
<NewProyectos /> */
}
