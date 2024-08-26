import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";

import Layout from "./Layout";
import About from "../components/About";
import ProtectedRoute from "./ProtectedRoute";

import TaskCard from "../components/componentes/TaskCard";
import NewCard from "../components/componentes/NewCard";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        index: true, // path: "/"
        element: (
          <ProtectedRoute>
            <TaskCard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default Router;
