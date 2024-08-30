// Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Card from "./components/Card"; // Asegúrate de agregar todas las rutas necesarias

import NewProyectos from "./components/NewProyectos";
import NewCard from "./components/NewCard";
import Perfil from "./components/Perfil";
import Imagen from "./components/Imagen";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/imagen", // Asegúrate de que el path sea consistente con el nombre del componente
    element: (
      <>
        <Card />,
        <Card />,
        <Card />,
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/NewProyectos",
    element: <NewProyectos />,
  },
  {
    path: "/NewCard",
    element: <NewCard />,
  },
  {
    path: "/card",
    element: <Card />, // Agrega todas las rutas necesarias aquí
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;
