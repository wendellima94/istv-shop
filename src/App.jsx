import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Menu from "./components/menu";

const App = () => {
  return (
    <Router>
      <Menu />
      <AppRoutes />
    </Router>
  );
};

export default App;
