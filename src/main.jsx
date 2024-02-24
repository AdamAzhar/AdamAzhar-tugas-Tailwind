import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Header from "./Components/Header/Header.jsx";

const router = createBrowserRouter([
  {
    path: "tailwind",
    element: <App />,
  },
  {
    path: "/",
    element: <Header />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
