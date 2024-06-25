import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import Collection from "../pages/collections";
// import Fitness from "../pages/Fitness";
// import Makeup from "../pages/Makeup";
// import Manipulated from "../pages/Manipulated";
// import Natural from "../pages/Natural";
// import Collections from "../pages/Collections";
// import Tracking from "../pages/Tracking";
// import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collection" element={<Collection />} />
      {/* <Route path="/fitness" element={<Fitness />} />
      <Route path="/manipulated" element={<Manipulated />} />
      <Route path="/natural" element={<Natural />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;
