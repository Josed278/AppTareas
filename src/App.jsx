// import Card from "./components/Card";
// import Text from "./components/Text"; // Verifica la ruta de importación
// import Perfil from "./components/Perfil"; // Verifica la ruta de importación
// import NewCard from "./components/NewCard"; // Verifica la ruta de importación
// import NewProyectos from "./components/NewProyectos"; // Verifica la ruta de importación
// import Imagen from "./components/Imagen"; // Verifica la ruta de importación

import { useState, useEffect } from "react";
import { RouterProvider, useCurrentPath } from "./context/RouterContext";
import Router from "./Router";

function App() {
  return (
    <RouterProvider>
      <Router />
    </RouterProvider>
  );
  function Router() {
    const currentPath = useCurrentPath();
    console.log("Current path:", currentPath); // Debugging
    if (currentPath === "/Login") {
      return <Login />;
    } else if (currentPath === "/Card") {
      return <Card />;
    } else if (currentPath === "/" || currentPath === "/menu") {
      return <Menu />;
    } else {
      return <h1>Not Found</h1>;
    }
  }
}
export default App;
