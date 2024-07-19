import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext.jsx";
import { ApiProvider } from "./contexts/apiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </ApiProvider>
  </React.StrictMode>
);
