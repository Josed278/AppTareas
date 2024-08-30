// import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
