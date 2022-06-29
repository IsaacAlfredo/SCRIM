import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import { MyRoutes } from "./myRoutes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
